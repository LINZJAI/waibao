import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'big',
    redirect: '/big'
  },
  {
    path: '/big',
    name: 'big',
    component: () => import(/* webpackChunkName: "big" */ '../views/big.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/home1',
    name: 'home1',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/home2-1',
    name: 'home2-1',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/home2-1.vue')
  },
  {
    path: '/home2-2',
    name: 'home2-2',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/home2-2.vue')
  },
  {
    path: '/home3-1',
    name: 'home3-1',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/home2-1.vue')
  },
  {
    path: '/home3-2',
    name: 'home3-2',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/home2-2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
