import { createWebHistory, createRouter } from "vue-router";
import Index from "../layout/Index.vue";
import Home from '../pages/Home.vue';
import HelloWorld from '../components/HelloWorld.vue';
const routes = [
  {
    path: "/",
    component: Index,
    meta : {
      auth : true
    },
    children :[
      {
        path: "home",
        name: "Trang chủ",
        component : Home,
        meta : {
          auth : true
        },
      },
      {
        path: "/about",
        name: "About",
        component: HelloWorld,
        meta :{
          auth : true
        },
        
      },
    ]
  },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;