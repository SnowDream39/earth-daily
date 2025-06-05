import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/CesiumView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/callback',
      name: 'login-callback',
      component: () => import('../views/LoginCallback.vue'),
    }
  ],
})

export default router
