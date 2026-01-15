import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Users from "../pages/users.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/users", component: Users }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
