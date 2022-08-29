import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import vuetify from './plugins/vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$imagePath = 'https://koferpsihoalata.me/'
Vue.config.productionTip = false


new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')