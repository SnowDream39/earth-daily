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
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/callback',
      name: 'login-callback',
      component: () => import('../views/LoginCallback.vue'),
    },
    {
      path: '/why',
      name: 'why',
      component: () => import('../views/whyearth.vue'),
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('../views/learnmore.vue'),
    }
  ],
})

export default router
