import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const $App = createApp(App)

$App.use(createPinia())
$App.use(router)

$App.mount('#app')
