import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'userLogin',
    component: () => import('../views/user/userLogin.vue')
  },
  {
    path: '/writeEmail',
    name: 'writeEmail',
    component: () => import('../views/user/writeEmail.vue')
  },
  {
    path: '/viewReply',
    name: 'viewReply',
    component: () => import('../views/user/viewReply.vue')
  },
  {
    path: '/adminLogin',
    name: 'adminLogin',
    component: () => import('../views/admin/adminLogin.vue')
  },
  {
    path: '/adminEmail',
    name: 'adminEmail',
    component: () => import('../views/admin/adminEmail.vue')
  },
  {
    path: '/viewDetail',
    name: 'viewDetail',
    component: () => import('../views/admin/viewDetail.vue')
  },
  {
    path: '/adminAnswer',
    name: 'adminAnswer',
    component: () => import('../views/admin/adminAnswer.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
