<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useClothes } from './stores/useClothes'
import { useDrawer } from './stores/useDrawer'
import { useFavoriteClothes } from './stores/useFavoriteClothes'
import { useOrderClothes } from './stores/useOrderClothes'

useDrawer()
useClothes()
useFavoriteClothes()
useOrderClothes()
</script>

<style scoped></style>
