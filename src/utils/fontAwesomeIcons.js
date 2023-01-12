import { library } from '@fortawesome/fontawesome-svg-core'

import { faUser, faBars, faXmark, faEnvelope, faChevronDown, faAnglesDown } from '@fortawesome/free-solid-svg-icons'

import { faHtml5, faCss3, faLinkedin, faJs, faVuejs, faLaravel, faPhp, faGithub } from '@fortawesome/free-brands-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Vue.component('font-awesome-icon', FontAwesomeIcon)

let icons = [
    faUser,
    faLinkedin,
    faBars,
    faXmark,
    faHtml5,
    faCss3,
    faJs,
    faVuejs,
    faLaravel,
    faPhp,
    faGithub,
    faEnvelope,
    faChevronDown,
    faAnglesDown,
]

library.add(icons)

export default FontAwesomeIcon