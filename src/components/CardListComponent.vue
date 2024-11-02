<template>
  <div
    class="grid table-2:grid-cols-2 table-3:grid-cols-3 table-4:grid-cols-4 table-5:grid-cols-5 gap-16"
  >
    <card-component
      image="/clothes/shirt-1.webp"
      title="Футболка 1"
      :price="1000.0"
      :is-favorite="true"
      :is-added="false"
    ></card-component>
  </div>
</template>

<script setup lang="ts">
import CardComponent from './CardComponent.vue'
</script>

<style scoped></style>
