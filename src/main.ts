import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router'
import store, { STOREMUTSTIONTYPES } from './store';
import './router/routers_permission'
import { loadAllPlugins } from './plugins'
import { getSessionStorage, removeSessionStorage } from './utils/storage';

const app = createApp({
    // 你想在这里绑定vue options的各个属性
    setup: () => {

        if (sessionStorage.getItem('store')) {
            store.replaceState(Object.assign({}, store.state, JSON.parse(getSessionStorage('store'))));
            removeSessionStorage('store');
        }
    },
    render: () => h(App)
});
// 加载所有插件
loadAllPlugins(app)

app.use(store).use(router).mount('#app');


// app.config.errorHandler = function (err, vm, info) {
//     console.log(err, vm, info);
//     // handle error
//     // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
//     // 只在 2.2.0+ 可用
// }
