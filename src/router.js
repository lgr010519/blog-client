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
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('./views/Categories')
  },
  {
    path: '/categories/details',
    name: 'categoriesDetails',
    component: () => import('./views/Categories/Details')
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import('./views/Tags')
  },
  {
    path: '/tags/details',
    name: 'tagsDetails',
    component: () => import('./views/Tags/Details')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About')
  },
  {
    path: "/articles",
    name: "articles",
    component: () => import("./views/Articles"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
