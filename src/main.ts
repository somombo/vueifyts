import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App.vue'
import router from './router/'

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
