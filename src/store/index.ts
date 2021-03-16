import Vue from "vue";
import Vuex, { createLogger, Store } from "vuex";
import permission, { MUTATIONTYPES as permissionType } from "./modules/permission";
import setting, { MUTATIONTYPES as settingType } from "./modules/setting";
import user, { MUTATIONTYPES as userType } from "./modules/user";

export const STOREMUTSTIONTYPES = {
  PERMISSION: permissionType,
  SETTING: settingType,
  USER: userType,
};

const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];
const store = new Vuex.Store({
  plugins,
  modules: {
    permission,
    setting,
    user,
  },
});
export default store;
