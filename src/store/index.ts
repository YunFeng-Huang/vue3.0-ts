
import Vue from 'vue'
import Vuex from 'vuex'

interface ModelesType {
  [propName: string]: any;
}
// Vue.use(Vuex)
const files = require.context('./modules', false, /\.js$/)
const modules: ModelesType = {}
files.keys().forEach(key => {
  if (key === "./index.ts") return;
  modules[key.replace(/(\.\/|\.ts)/g, "")] = files(key).default;
});
Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})
const store = new Vuex.Store({
  modules,
})
export default store
