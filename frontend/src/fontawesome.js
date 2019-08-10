import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSpinner,
  faUserCircle,
  faTimesCircle,
  faSearch,
  faExclamationTriangle,
  faChevronCircleRight,
  faCircle,
  faFire,
  faSearchDollar,
  faUsers,
  faProjectDiagram,
  faCalendarAlt,
  faNewspaper,
  faComments,
  faPlusCircle,
  faGlobeAmericas,
  faSave
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from "vue";


library.add(faSearch)
library.add(faExclamationTriangle)
library.add(faSpinner)
library.add(faUserCircle)
library.add(faChevronCircleRight)
library.add(faTimesCircle)
library.add(faCircle)
library.add(faFire)
library.add(faUsers)
library.add(faCalendarAlt)
library.add(faProjectDiagram)
library.add(faSearchDollar)
library.add(faNewspaper)
library.add(faComments)
library.add(faPlusCircle)
library.add(faGlobeAmericas)
library.add(faSave)
Vue.component('font-awesome-icon', FontAwesomeIcon)
