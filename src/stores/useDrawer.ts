import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrawer = defineStore('drawer', () => {
  const isShow = ref<boolean>(false)

  const toggle = () => {
    isShow.value = !isShow.value
  }

  return { isShow, toggle }
})
