<template>
  <div class="flex items-center border-b pb-2">
    <h2 class="text-2xl font-bold">Корзина</h2>
    <img
      class="w-6 ml-auto cursor-pointer hover:opacity-50 transition-all"
      src="/cross-1.svg"
      alt="Cross 1"
      @click="drawer.toggle"
    />
  </div>
</template>

<script setup lang="ts">
import { useDrawer } from '@/stores/useDrawer'

const drawer = useDrawer()
</script>

<style scoped></style>
