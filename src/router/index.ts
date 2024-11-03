import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import FavoritePage from '@/pages/FavoritePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage,
      name: 'main',
    },
    {
      path: '/favorite',
      component: FavoritePage,
      name: 'favorite',
    },
  ],
})

export default router
