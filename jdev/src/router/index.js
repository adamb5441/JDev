import Vue from 'vue'
import VueRouter from 'vue-router'
import Stage from '../views/Stage'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Stage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
