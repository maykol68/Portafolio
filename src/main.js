import { createApp } from 'vue'
import 'aos/dist/aos.css'
import VueSmoothScroll from 'vue3-smooth-scroll'

import App from './App.vue'
import "@/assets/css/app.css";

import FontAwesomeIcon from '@/utils/fontAwesomeIcons'

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(VueSmoothScroll, {
    duration: 700,
    updateHistory: false
  })

app.mount('#app')
