<template>
  <div class="border p-2 mt-4 rounded-xl">
    <div class="relative">
      <img
        class="w-1/6 absolute top-1 right-1 cursor-pointer hover:opacity-50 active:opacity-25 transition-all"
        src="/cross-2.svg"
        alt="Cross 2"
        @click="deleteItem"
      />
      <img class="rounded-xl" src="/clothes/shirt-1.webp" alt="Clothes" />
    </div>
    <div class="flex flex-col mt-2">
      <p>Футболка 1</p>
      <b>1000 р.</b>
    </div>
  </div>
</template>

<script setup lang="ts">
const deleteItem = () => {
  alert('Deleted!')
}
</script>

<style scoped></style>
