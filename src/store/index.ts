import Vue from "vue";
import Vuex, { createLogger, Store } from "vuex";
import permission from "./modules/permission/permission";
import { MUTATIONTYPES as permissionType } from "./modules/permission/permission_d";
import setting from "./modules/setting/setting";
import { MUTATIONTYPES as settingType } from "./modules/setting/setting_d";
import user from "./modules/user/user";
import { MUTATIONTYPES as userType } from "./modules/user/user_d";

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
