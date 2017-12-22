import Vue from 'vue'

import App from './App.vue'
import './resource'
import router from './router/'
import store from './store'

Vue.config.productionTip = false

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
