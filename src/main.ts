import { createApp } from 'vue';
// @ts-ignore: Unreachable code error
import App from './App';
import router from './router'
import store from './store';
// @ts-ignore: Unreachable code error
import elementPlus from 'ElementPlus';
createApp(App).use(elementPlus).use(store).use(router).mount('#app');
