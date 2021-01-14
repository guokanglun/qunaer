import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../pages/home/Home";
import City from "../pages/city/City";


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/city',
    component: City
  },
  {
    path:'/',
    redirect: '/home'
  },


];

const router = new VueRouter({
  routes
})

export default router
