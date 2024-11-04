<template>
  <div class="grid grid-cols-2 gap-x-4">
    <drawer-card-component
      v-for="item in clothes"
      :key="item.id"
      :id="item.id"
      :image="item.image"
      :title="item.title"
      :price="item.price"
    ></drawer-card-component>
  </div>
</template>

<script setup lang="ts">
import DrawerCardComponent from '@/components/drawer/DrawerCardComponent.vue'

import type IClothes from '@/interfaces/IClothes'

defineProps<{ clothes: IClothes[] }>()
</script>

<style scoped></style>
