import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPlginPersistedState from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

const $App = createApp(App);
const Pinia = createPinia();

Pinia.use(piniaPlginPersistedState);

$App.use(Pinia);
$App.use(router);

$App.mount('#app')
