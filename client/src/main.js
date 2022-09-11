import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import vuetify from './plugins/vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBook, faHouseChimneyWindow, faHeadset, faSquareEnvelope, faEnvelope, faChevronDown, faCalendar, faReply } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser)
library.add(faBook)
library.add(faHouseChimneyWindow)
library.add(faHeadset)
library.add(faSquareEnvelope)
library.add(faFacebookSquare)
library.add(faInstagram)
library.add(faTiktok)
library.add(faEnvelope)
library.add(faChevronDown)
library.add(faCalendar)
library.add(faReply)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$imagePath = 'https://koferpsihoalata.me/'
Vue.config.productionTip = false


new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')