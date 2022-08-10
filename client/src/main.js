import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import vuetify from './plugins/vuetify'

Vue.prototype.$imagePath = 'http://localhost:3000/'
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
