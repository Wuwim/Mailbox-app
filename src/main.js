import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './utils/request'
import './utils/vant'
import './assets/common.css'



// import api from './api' // 导入api接口

// Vue.prototype.$api = api; // 将api挂载到vue的原型上


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
