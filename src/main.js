import { createApp } from 'vue'
import 'aos/dist/aos.css'
import VueSmoothScroll from 'vue3-smooth-scroll'

import App from './App.vue'
import "@/assets/css/app.css";

import FontAwesomeIcon from '@/utils/fontAwesomeIcons'
import { createI18n } from 'vue-i18n'
import en from '@/en.json'
import es from '@/es.json'



const i18n = createI18n({
  locale: 'en', 
  fallbackLocale: 'en',
  messages: {en, es}
})

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(VueSmoothScroll, {
    duration: 700,
    updateHistory: false
  })
app.use(i18n)

app.mount('#app')
