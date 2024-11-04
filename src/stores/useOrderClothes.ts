import { defineStore } from 'pinia'
import axios from 'axios'
import { onMounted, ref, watchEffect } from 'vue'

import type IClothes from '@/interfaces/IClothes'

const path = 'https://a6c8749b80884675.mokky.dev/orders'

export const useOrderClothes = defineStore('orders', () => {
  const items = ref<IClothes[]>([])
  const totalPrice = ref<number>(0)

  const fetching = async (): Promise<void> => {
    try {
      items.value = (await axios.get<IClothes[]>(path)).data
    } catch (err) {
      alert(err)
    }
  }

  onMounted(fetching)

  watchEffect(() => {
    totalPrice.value = items.value.reduce(
      (sum: number, current: IClothes) => sum + current.price,
      0,
    )
  })

  return { items, totalPrice, fetching }
})
