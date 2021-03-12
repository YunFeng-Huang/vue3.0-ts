import Vue from "vue";
import Vuex, { createLogger, Store } from "vuex";
import permission, { MutationTypes as permissionType } from "./modules/permission";
import setting, { MutationTypes as settingType } from "./modules/setting";
import user, { MutationTypes as userType } from "./modules/user";
// Vue.use(Vuex)
// const files = require.context('./modules', false, /\.ts$/)
// const modules: any = {}
// files.keys().forEach(key => {
//   if (key === "./index.ts") return;
//   modules[key.replace(/(\.\/|\.ts)/g, "")] = files(key).default;
// });
// Object.keys(modules).forEach((key) => {
//   modules[key]['namespaced'] = true
// })
// console.log(modules, 'modules');
const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];
const store = new Vuex.Store({
  plugins,
  modules: {
    permission: permission,
    setting,
    user,
  },
});
export default store;

export let storeMutationTypes = {
  permission: permissionType,
  setting: settingType,
  user: userType,
};
