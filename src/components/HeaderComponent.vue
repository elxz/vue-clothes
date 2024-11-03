<template>
  <header class="flex justify-between px-12 py-6 border-b-2 border-gray-100">
    <div
      class="flex items-center gap-3 cursor-pointer"
      @click="$router.push('/')"
    >
      <img class="w-12" src="/logo.png" alt="Logo" />
      <h2 class="text-xl font-bold uppercase">Vue Clothes</h2>
    </div>

    <ul class="flex items-center gap-12">
      <li
        class="flex items-center gap-1 cursor-pointer hover:text-gray-500 active:text-gray-400"
        @click="drawer.toggle"
      >
        <img class="w-8" src="/cart.svg" alt="Cart" />
        <b>1000 р.</b>
      </li>
      <li
        class="flex items-center gap-1 cursor-pointer hover:text-gray-500 active:text-gray-400"
        @click="$router.push('/favorite')"
      >
        <img class="w-8" src="/heart-mark.svg" alt="Cart" />
        <span>Избранное</span>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { useDrawer } from '@/stores/useDrawer'

const drawer = useDrawer()
</script>

<style scoped></style>
