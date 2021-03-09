import { createWebHistory, createRouter } from "vue-router";
import DashboardLayout from "../components/layout/DashboardLayout.vue";
import HelloWorld from '../components/HelloWorld.vue';
const routes = [
  {
    path: "/",
    name: "Home",
    component: DashboardLayout,
  },
  {
    path: "/",
    name: "About",
    component: HelloWorld,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;