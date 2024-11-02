import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import CartPage from '@/pages/CartPage.vue'
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
      path: '/cart',
      component: CartPage,
      name: 'cart',
    },
    {
      path: '/favorite',
      component: FavoritePage,
      name: 'favorite',
    },
  ],
})

export default router
