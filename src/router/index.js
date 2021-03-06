import VueRouter from 'vue-router'
import Vue from 'vue'
const home = () => import('../views/home/home.vue')
const fenlei = () => import('../views/fenlei/fenlei.vue')
const gouwu = () => import('../views/gouwu/gouwu.vue')
const me = () => import('../views/me/me.vue')
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/fenlei',
    component: fenlei
  },
  {
    path: '/gouwu',
    component: gouwu
  },
  {
    path: '/me',
    component: me
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      keepAlive: false
    }
  },
]
const router = new VueRouter({
  routes
})

export default router
