<template>
  <drawer-component v-if="drawer.isShow"></drawer-component>
  <div class="w-4/5 rounded-2xl shadow-xl m-auto mt-16 pb-2 bg-white">
    <header-component></header-component>

    <div class="p-10"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
import { useDrawer } from '@/stores/useDrawer'

import HeaderComponent from '@/components/HeaderComponent.vue'
import DrawerComponent from '@/components/DrawerComponent.vue'

const drawer = useDrawer()
</script>

<style scoped></style>
