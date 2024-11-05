import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, onMounted, ref, watchEffect } from 'vue'

import { useFavoriteClothes } from './useFavoriteClothes'
import { useOrderClothes } from './useOrderClothes'

import type IClothes from '@/interfaces/IClothes'

const path = 'https://a6c8749b80884675.mokky.dev/items'

export const useClothes = defineStore('clothes', () => {
  const items = ref<IClothes[]>([])

  // Запрос данных из clothes
  const fetching = async (): Promise<void> => {
    try {
      items.value = (await axios.get<IClothes[]>(path)).data
    } catch (err) {
      alert(err)
    }
  }

  onMounted(fetching)

  // Связь с input value
  const searchQuery = ref<string>('')

  // Фильтрует отображаемые данные на основе строки, введенной в input (searchQuery)
  // Фильтрация происходит с учетом выбранной сортировки
  const sortedAndSearchedItems = computed((): IClothes[] => {
    return [...items.value].filter(item =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  })

  // Сортировка
  const sortedBy = (value: string): void => {
    if (value === 'sortedByTitleAsc') {
      items.value.sort((item1, item2) =>
        item1.title.toLowerCase().localeCompare(item2.title.toLowerCase()),
      )
    }
    if (value === 'sortedByTitleDesc') {
      items.value.sort((item1, item2) =>
        item2.title.toLowerCase().localeCompare(item1.title.toLowerCase()),
      )
    }
    if (value === 'sortedByPriceAsc') {
      items.value.sort((item1, item2) => item1.price - item2.price)
    }
    if (value === 'sortedByPriceDesc') {
      items.value.sort((item1, item2) => item2.price - item1.price)
    }

    sortedAndSearchedItems
  }

  const favoriteClothes = useFavoriteClothes()
  const orderClothes = useOrderClothes()

  // Отслеживание изменений внутри itemsIds в favorites
  // При изменении происходит изменение isFavorite в clothes
  watchEffect(() => {
    items.value.map(item =>
      favoriteClothes.itemsIds.includes(item.id)
        ? (item.isFavorite = true)
        : (item.isFavorite = false),
    )
  })

  // Отслеживание изменений внутри itemsIds в orders
  // При изменении происходит изменение isFavorite в orders
  watchEffect(() => {
    items.value.map(item =>
      orderClothes.itemsIds.includes(item.id)
        ? (item.isOrder = true)
        : (item.isOrder = false),
    )
  })

  // При изменении clothes (изменили isOrder или isFavorite)
  // Формируется новый массив favorite значений
  const favoriteItems = computed((): IClothes[] => {
    return [...items.value].filter(item => item.isFavorite === true)
  })

  // При изменении clothes (изменили isOrder или isFavorite)
  // Формируется новый массив order значений
  const orderItems = computed((): IClothes[] => {
    return [...items.value].filter(item => item.isOrder === true)
  })

  // Хранит в себе итоговую сумму заказа
  const totalPrice = ref<number>(0)

  // Отслеживает изменения в orderItems и делает пересчет totalPrice
  watchEffect(() => {
    totalPrice.value = orderItems.value.reduce(
      (sum: number, current: IClothes) => sum + current.price,
      0,
    )
  })

  return {
    items,
    sortedAndSearchedItems,
    searchQuery,
    sortedBy,
    favoriteItems,
    orderItems,
    totalPrice,
  }
})
