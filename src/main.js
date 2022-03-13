import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/common.css'
import router from '@/router/index.js'
import store from '@/store/index.js'
import '@/assets/icon/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
