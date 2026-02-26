import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './assets/base.css'

const app = createApp(App)

app.use(router)
app.use(Quasar)
app.use(createPinia())

app.mount('#app')
