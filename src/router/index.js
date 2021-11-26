import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/email/login.vue'),
    meta: {
      title: '登录', content: 'disable'
    }
  },
  {
    path: '/email/writeEmail',
    name: 'writeEmail',
    component: () => import('../views/email/writeEmail.vue'),
    meta: {
      title: '登录', content: 'disable-no'
    }
  },
  {
    path: '/email/viewReply',
    name: 'viewReply',
    component: () => import('../views/email/viewReply.vue'),
    meta: {
      title: '登录', content: 'disable-no'
    }
  },
  {
    path: '/email/adminEmail',
    name: 'adminEmail',
    component: () => import('../views/email/adminEmail.vue'),
    meta: {
      title: '登录', content: 'disable-no'
    }
  },
  {
    path: '/email/viewDetail',
    name: 'viewDetail',
    component: () => import('../views/email/viewDetail.vue'),
    meta: {
      title: '登录', content: 'disable-no'
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
