import { defineStore } from 'pinia'
import axios from 'axios'
import { onMounted, ref } from 'vue'

import type IClothes from '@/interfaces/IClothes'

const path = 'https://a6c8749b80884675.mokky.dev/favorites'

export const useFavoriteClothes = defineStore('favorites', () => {
  const items = ref<IClothes[]>([])

  const fetching = async (): Promise<void> => {
    try {
      items.value = (await axios.get<IClothes[]>(path)).data
    } catch (err) {
      alert(err)
    }
  }

  onMounted(fetching)

  return { items }
})
