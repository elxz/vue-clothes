<template>
  <main-layout>
    <div class="flex justify-between items-center gap-4">
      <h2 class="text-3xl font-bold">Каталог</h2>
      <filter-sort-component></filter-sort-component>
    </div>

    <card-list-component
      :clothes="clothes.sortedAndSearchedItems"
    ></card-list-component>
  </main-layout>
</template>

<script setup lang="ts">
import { useClothes } from '@/stores/useClothes'

import CardListComponent from '@/components/CardListComponent.vue'
import MainLayout from './Layouts/MainLayout.vue'
import FilterSortComponent from '@/components/FilterSortComponent.vue'

const clothes = useClothes()
</script>

<style scoped></style>
