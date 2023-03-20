import { createWebHistory, createRouter } from "vue-router";
import Reminder from '@/views/reminder.vue';

const routes = [
  {
    path: "/",
    name: 'Reminder',
    component: Reminder,
  },
  {
    path: "/about",
    name: "About",
    component: () => import('@/views/about.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;