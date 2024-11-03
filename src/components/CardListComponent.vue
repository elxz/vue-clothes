<template>
  <div
    class="mt-8 grid table-2:grid-cols-2 table-3:grid-cols-3 table-4:grid-cols-4 table-5:grid-cols-5 gap-16"
    v-auto-animate
  >
    <card-component
      v-for="item in clothes"
      :key="item.id"
      :image="item.image"
      :title="item.title"
      :price="item.price"
      :is-favorite="true"
      :is-added="true"
    ></card-component>
  </div>
</template>

<script setup lang="ts">
import type IClothes from '@/interfaces/IClothes'
import CardComponent from './CardComponent.vue'

defineProps<{
  clothes: IClothes[]
}>()
</script>

<style scoped></style>
