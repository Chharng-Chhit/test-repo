import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faUser, 
  faBell, 
  faCog, 
  faHome, 
  faWallet, 
  faChartBar, 
  faSignOutAlt, 
  faTasks,
  faChevronDown,
  faNewspaper,
  faFilm,
  faPlay,
  faTrophy,
  faCamera,
  faRunning
} from '@fortawesome/free-solid-svg-icons'

// Add icons to library
library.add(
  faUser, 
  faBell, 
  faCog, 
  faHome, 
  faWallet, 
  faChartBar, 
  faSignOutAlt, 
  faTasks,
  faChevronDown,
  faNewspaper,
  faFilm,
  faPlay,
  faTrophy,
  faCamera,
  faRunning
)

export default defineNuxtPlugin((nuxtApp) => {
  // Register both component names for compatibility
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
  nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon)
})
