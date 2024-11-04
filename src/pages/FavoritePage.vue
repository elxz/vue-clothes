<template>
  <main-layout>
    <h2 class="text-3xl font-bold v-auto-animate">Избранное</h2>
    <card-list-component :clothes="favoriteClothes.items"></card-list-component
  ></main-layout>
</template>

<script setup lang="ts">
import { useFavoriteClothes } from '@/stores/useFavoriteClothes'

import MainLayout from './Layouts/MainLayout.vue'
import CardListComponent from '@/components/CardListComponent.vue'

const favoriteClothes = useFavoriteClothes()
</script>

<style scoped></style>
