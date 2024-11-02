<template>
  <div class="w-4/5 rounded-2xl shadow-xl m-auto mt-16 pb-2 bg-white">
    <header-component></header-component>

    <div class="p-10"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<style scoped></style>
