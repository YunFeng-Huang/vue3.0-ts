// @ts-ignore: Unreachable code error
import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store';
// @ts-ignore: Unreachable code error
import elementPlus from 'ElementPlus';
createApp(App).use(elementPlus).use(store).use(router).mount('#app');
