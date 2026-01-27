import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'
import Users from '@/pages/users.vue'
import Heroes from '@/pages/heroes/heroes.vue'
import Login from '@/pages/login.vue'
import register from '@/pages/register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
  { path: '/heroes', component: Heroes },
  { path: '/login', component: Login },
  { path: '/register', component: register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router