<template>
  <div class="flex gap-4">
    <select
      class="w-8/12 px-4 py-2 items-center outline-0 border rounded-xl border-gray-300 focus:border-gray-500 text-gray-600 transition-all"
      @change="changeSort"
    >
      <option class="text-red-700" disabled selected>Сортировка...</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
    <input
      class="w-6/12 px-4 py-2 items-center outline-0 border rounded-xl border-gray-300 focus:border-gray-500 transition-all"
      type="text"
      placeholder="Поиск..."
      v-model="clothes.searchQuery"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useClothes } from '@/stores/useClothes'

const clothes = useClothes()

const options = ref<{ value: string; name: string }[]>([
  {
    value: 'name-asc',
    name: 'По названию (ASC)',
  },
  {
    value: 'name-desc',
    name: 'По названию (DESC)',
  },
  {
    value: 'price-asc',
    name: 'По цене (ASC)',
  },
  {
    value: 'price-desc',
    name: 'По цене (DESC)',
  },
])

const changeSort = (event: Event): void => {
  let sort = (event.target as HTMLSelectElement).value

  if (sort === 'name-asc') {
    clothes.sortedByNameAsc()
  }
  if (sort === 'name-desc') {
    clothes.sortedByNameDesc()
  }
  if (sort === 'price-asc') {
    clothes.sortedByPriceAsc()
  }
  if (sort === 'price-desc') {
    clothes.sortedByPriceDesc()
  }
}
</script>

<style scoped></style>
