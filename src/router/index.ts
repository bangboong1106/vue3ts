import { createWebHistory, createRouter } from "vue-router";
import Index from "../layout/Index.vue";
import Home from '../pages/Home.vue';
import About from '../pages/About/About.vue';
import BookCar from '../pages/Booking/BookCar.vue';
const routes = [
  {
    path: "/",
    redirect: '/home',
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
        name: "Tìm hiểu thêm",
        component: About,
        meta :{
          auth : true
        },

      },
      {
        path: "/book-car",
        name: "Đặt xe",
        component: BookCar,
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