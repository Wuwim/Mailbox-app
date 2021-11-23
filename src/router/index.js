import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/email/login.vue')
  },
  {
    path: '/email/writeEmail',
    name: 'writeEmail',
    component: () => import('../views/email/writeEmail.vue')
  },
  {
    path: '/email/viewReply',
    name: 'viewReply',
    component: () => import('../views/email/viewReply.vue')
  },
  {
    path: '/email/adminEmail',
    name: 'adminEmail',
    component: () => import('../views/email/adminEmail.vue')
  },
  {
    path: '/email/viewDetail',
    name: 'viewDetail',
    component: () => import('../views/email/viewDetail.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
