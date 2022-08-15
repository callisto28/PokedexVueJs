import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './utils/store'
import VueCookies from 'vue-cookies';


Vue.config.productionTip = false



new Vue({
  vuetify,
  Vuex,
  router,
  store,
  VueCookies,
  
  render: h => h(App)
}).$mount('#app')

