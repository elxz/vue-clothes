import { defineStore } from 'pinia'
import axios from 'axios'
import { onMounted, ref, watchEffect } from 'vue'

import type IInterClothes from '@/interfaces/IInterClothes'

const path = 'https://a6c8749b80884675.mokky.dev/orders'

export const useOrderClothes = defineStore('orders', () => {
  const items = ref<IInterClothes[]>([])

  // Запрос данных из orders
  const fetching = async (): Promise<void> => {
    try {
      items.value = (await axios.get<IInterClothes[]>(path)).data
    } catch (err) {
      alert(err)
    }
  }

  onMounted(fetching)

  // Содержит в себе id (clothesId) предметов из clothes, которые есть в orders
  const itemsIds = ref<number[]>([])

  // При изменении данных в orders (добавили/удалили запись) происходит пересчет itemsIds
  watchEffect((): void => {
    itemsIds.value = items.value.map(item => item.clothesId)
  })

  return { items, fetching, itemsIds }
})
