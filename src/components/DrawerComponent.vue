<template>
  <shading-component @click="drawer.toggle"></shading-component>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 v-auto-animate">
    <drawer-header-component></drawer-header-component>
    <drawer-card-list-component
      :clothes="orderClothes.items"
    ></drawer-card-list-component>
    <drawer-footer-component></drawer-footer-component>
  </div>
</template>

<script setup lang="ts">
import { useDrawer } from '@/stores/useDrawer'
import { useOrderClothes } from '@/stores/useOrderClothes'

import ShadingComponent from '@/components/ShadingComponent.vue'
import DrawerCardListComponent from '@/components/drawer/DrawerCardListComponent.vue'
import DrawerHeaderComponent from '@/components/drawer/DrawerHeaderComponent.vue'
import DrawerFooterComponent from '@/components/drawer/DrawerFooterComponent.vue'

const drawer = useDrawer()

const orderClothes = useOrderClothes()
</script>

<style scoped></style>
