import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/css/app.css";

import FontAwesomeIcon from '@/utils/fontAwesomeIcons'

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
