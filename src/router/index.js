import Vue from "vue";
import VueRouter from "vue-router";
import sky from "../views/sky.vue";
import login from "../views/login.vue";
import page404 from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/sky",
    name: "sky",
    component: sky
  },
  {
    path:"/404",
    name:"page404",
    component:page404
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
