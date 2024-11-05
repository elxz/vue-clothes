<template>
  <div
    class="p-2 mb-4 border rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
  >
    <div class="relative">
      <img
        class="w-2/12 absolute top-1 left-1 hover:opacity-50"
        :src="isFavorite ? 'heart-like-2.svg' : 'heart-like-1.svg'"
        alt="Like 1"
        @click="toggleFavorite"
      />
      <img class="rounded-xl" :src="image" alt="Clothes" />
    </div>
    <p class="mt-1">{{ title }}</p>

    <div class="flex relative items-center mt-2">
      <div class="flex flex-col">
        <span class="text-gray-500">Цена:</span>
        <b>{{ price }} р.</b>
      </div>

      <img
        class="w-2/12 absolute right-0 hover:opacity-50"
        :src="isOrder ? 'checked-plus.svg' : 'plus.svg'"
        alt="Plus"
        @click="toggleOrder"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

import { useFavoriteClothes } from '@/stores/useFavoriteClothes'
import { useOrderClothes } from '@/stores/useOrderClothes'

const props = defineProps<{
  id: number
  image: string
  title: string
  price: number
  isFavorite: boolean
  isOrder: boolean
}>()

const toggleOrder = async (): Promise<void> => {
  if (props.isOrder) {
    const id = useOrderClothes().items.find(
      item => item.clothesId === props.id,
    )?.id

    await axios
      .delete(`https://a6c8749b80884675.mokky.dev/orders/${id}`)
      .then(() => {
        useOrderClothes().fetching()
      })
      .catch(err => alert(err))
  } else {
    await axios
      .post('https://a6c8749b80884675.mokky.dev/orders', {
        clothesId: props.id,
        image: props.image,
        title: props.title,
        price: props.price,
      })
      .then(() => useOrderClothes().fetching())
      .catch(err => alert(err))
  }
}

const toggleFavorite = async (): Promise<void> => {
  if (props.isFavorite) {
    const id = useFavoriteClothes().items.find(
      item => item.clothesId === props.id,
    )?.id

    await axios
      .delete(`https://a6c8749b80884675.mokky.dev/favorites/${id}`)
      .then(() => {
        useFavoriteClothes().fetching()
      })
      .catch(err => alert(err))
  } else {
    await axios
      .post('https://a6c8749b80884675.mokky.dev/favorites', {
        clothesId: props.id,
        image: props.image,
        title: props.title,
        price: props.price,
      })
      .then(() => useFavoriteClothes().fetching())
      .catch(err => alert(err))
  }
}
</script>

<style scoped></style>
