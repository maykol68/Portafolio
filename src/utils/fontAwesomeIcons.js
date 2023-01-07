import { library } from '@fortawesome/fontawesome-svg-core'

import { faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faUser, faLinkedin, faBars, faXmark)

export default FontAwesomeIcon