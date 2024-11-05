<template>
  <div class="border p-2 mt-4 rounded-xl">
    <div class="relative">
      <img
        class="w-1/6 absolute top-1 right-1 cursor-pointer hover:opacity-50 active:opacity-25 transition-all"
        src="/cross-2.svg"
        alt="Cross 2"
        @click="deleteItem"
      />
      <img class="rounded-xl" :src="image" alt="Clothes" />
    </div>
    <div class="flex flex-col mt-2">
      <p>{{ title }}</p>
      <b>{{ price }} р.</b>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

import { useOrderClothes } from '@/stores/useOrderClothes'

const props = defineProps<{
  id: number
  image: string
  title: string
  price: number
}>()

const deleteItem = async (): Promise<void> => {
  const id = useOrderClothes().items.find(
    item => item.clothesId === props.id,
  )?.id
  await axios
    .delete(`https://a6c8749b80884675.mokky.dev/orders/${id}`)
    .then(() => useOrderClothes().fetching())
    .catch(err => alert(err))
}
</script>

<style scoped></style>
