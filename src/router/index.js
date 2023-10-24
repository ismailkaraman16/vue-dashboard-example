import { createRouter, createWebHistory } from 'vue-router'

import statsView from '../views/stats.vue';
import posDevicesView from '../views/posDevices.vue';
import usersView from '../views/users.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'İstatistikler',
      component: statsView,
    },
    {
      path: '/posDevices',
      name: 'Pos Cihazları',
      component: posDevicesView,
    },
    {
      path: '/users',
      name: 'Kullanıcılar',
      component: usersView,
    }
  ]
})

export default router
