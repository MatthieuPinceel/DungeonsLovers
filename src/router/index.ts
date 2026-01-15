import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Users from '../pages/users.vue'
import Heroes from '../pages/heros.vue'
import Login from '../pages/login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
  { path: '/heros', component: Heroes },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
