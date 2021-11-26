import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './utils/request'
import './utils/vant'
import './assets/common.css'


router.beforeEach((to, form, next) => {
  // 路由发生变化修改页面meta
  if (to.meta.content) {
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
    // 路由发生变化修改页面title
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
