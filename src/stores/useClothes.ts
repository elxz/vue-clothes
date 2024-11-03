import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'

import type IClothes from '@/interfaces/IClothes'

const path = 'https://a6c8749b80884675.mokky.dev/items'

export const useClothes = defineStore('clothes', () => {
  const items = ref<IClothes[]>([])

  const fetching = async (): Promise<void> => {
    try {
      items.value = (await axios.get<IClothes[]>(path)).data
    } catch (err) {
      alert(err)
    }
  }

  onMounted(fetching)

  const searchQuery = ref<string>('')

  const sortedAndSearchedItems = computed((): IClothes[] => {
    sortBy.value
    return [...items.value].filter(item =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  })

  const sortBy = ref<string>('')

  const sortedByNameAsc = (): void => {
    items.value.sort((item1, item2) =>
      item1.title.toLowerCase().localeCompare(item2.title.toLowerCase()),
    )
    sortBy.value = 'name-asc'
  }

  const sortedByNameDesc = (): void => {
    items.value.sort((item1, item2) =>
      item2.title.toLowerCase().localeCompare(item1.title.toLowerCase()),
    )
    sortBy.value = 'name-desc'
  }

  const sortedByPriceAsc = (): void => {
    items.value.sort((item1, item2) => item1.price - item2.price)
    sortBy.value = 'price-asc'
  }

  const sortedByPriceDesc = (): void => {
    items.value.sort((item1, item2) => item2.price - item1.price)
    sortBy.value = 'price-desc'
  }

  return {
    items,
    sortedAndSearchedItems,
    searchQuery,
    sortedByNameAsc,
    sortedByNameDesc,
    sortedByPriceAsc,
    sortedByPriceDesc,
  }
})
