import Vue from 'vue'
import App from './App.vue'
import router from './routers/router.js'
import store from './store'
import FastClick from 'fastclick'

FastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
