import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import bootstrap 4
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// import custom stylesheet
import '@/assets/scss/style.scss'

// import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faChevronRight, faChevronLeft, faMapMarkerAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faSearch,
  faChevronRight,
  faChevronLeft,
  faMapMarkerAlt,
  faBars
)

Vue.component('icon', FontAwesomeIcon)

// jquery
global.$ = $

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
