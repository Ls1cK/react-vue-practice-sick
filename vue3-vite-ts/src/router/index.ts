// src/router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'vue3-vite-typescript',
    meta: {
      title: 'Home',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/error',
    name: '404',
    meta: {
      title: '404',
    },
    component: () => import('@/views/404/index.vue'),
  },
  // 替代vue2中的'*'通配符路径
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(), // history 模式则使用 createWebHistory()
  routes,
});
export default router;