import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:{
      name:'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./views/Home')
  },
  {
    path: '/archives',
    name: 'archives',
    component: () => import('./views/Archives')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
