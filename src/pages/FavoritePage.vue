<template>
  <main-layout>
    <h2 class="text-3xl font-bold">Избранное</h2>
    <card-list-component :clothes="favoriteClothes.items"></card-list-component
  ></main-layout>
</template>

<script setup lang="ts">
import MainLayout from './Layouts/MainLayout.vue'
import CardListComponent from '@/components/CardListComponent.vue'
import { useFavoriteClothes } from '@/stores/useFavoriteClothes'

const favoriteClothes = useFavoriteClothes()
</script>

<style scoped></style>
