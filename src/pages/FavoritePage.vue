<template>
  <main-layout>
    <h2 class="text-3xl font-bold v-auto-animate">Избранное</h2>
    <card-list-component :clothes="clothes.favoriteItems"></card-list-component
  ></main-layout>
</template>

<script setup lang="ts">
import { useClothes } from '@/stores/useClothes'

import MainLayout from './Layouts/MainLayout.vue'
import CardListComponent from '@/components/CardListComponent.vue'

const clothes = useClothes()
</script>

<style scoped></style>
