import Vue from "vue";
import Vuex, { createLogger, Store } from "vuex";
import permission from "./modules/permission/permission";
import { MUTATIONTYPES as PERMISSIONTYPE } from "./modules/permission/permission_d";
import setting from "./modules/setting/setting";
import { MUTATIONTYPES as SETTINGTYPE } from "./modules/setting/setting_d";

// 模块mutations 集合
export const STOREMUTATIONTYPES = {
  PERMISSION: PERMISSIONTYPE,
  SETTING: SETTINGTYPE,
};

const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];
const store = new Vuex.Store({
  plugins,
  modules: {
    permission,
    setting,
  },
});
export default store;
