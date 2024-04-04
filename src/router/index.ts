import { createRouter, createWebHistory } from 'vue-router'
import { useSupabaseClient } from '@/composables/supabase'

const loginRoute = { name: 'Login' };
const loggedInRoute = { name: 'Home' };

const loginGuard = async (to: any, from: any, next: Function) => {
  const { data } = await useSupabaseClient.auth.getSession();
  if (data.session) {
    next();
  } else {
    next(loginRoute);
  }
}

const loggedInGuard = async (to: any, from: any, next: Function) => {
  const { data } = await useSupabaseClient.auth.getSession();
  if (data.session) {
    next(loggedInRoute);
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        beforeEnter: loggedInGuard
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
