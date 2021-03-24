// @ts-ignore: Unreachable code error
import router, { asyncRoutes, constantRoutes, RouteRecordRaw } from "@/router";
import { getRouterName } from "@/utils/routers";
import { SETTINGSTATETYPE, MUTATIONTYPES } from "./permission_d";
import axios from "@/api";
import menuList from "@/router/menu";
const empty = () => import("@/views/layout/component/main-content/content.vue");
// @ts-ignore: Unreachable code error
import { ElMessage } from "ElementPlus";
import { setSessionStorage } from "@/utils/storage";

const state: SETTINGSTATETYPE = {
  menuList: [], //菜单权限 展示菜单 数据后端返回
  token: null, // login  登录 退出设置 null
  crumbList: [], //面包屑 根据菜单显示
  permissionList: [] //权限数组 ，目前只用于重定向
};

const mutations = {
  [MUTATIONTYPES.SETROUTERS](state: SETTINGSTATETYPE, menuList: RouteRecordRaw[]) {
    let permissionList: string[] = [];
    getRouterName(menuList, permissionList);
    permissionList = [...new Set(permissionList)];
    state.menuList = menuList;
    state.permissionList = permissionList;
    // 持久化store
    setSessionStorage("store", JSON.stringify(state));
  },
  [MUTATIONTYPES.SETCRUBLIST](state: SETTINGSTATETYPE, breadcrumb: string) {
    const crumbList = breadcrumb.toString().split(/\//).slice(1);
    state.crumbList = crumbList;
  },
  [MUTATIONTYPES.LOGIN](state: SETTINGSTATETYPE, token: string) {
    state.token = "login";
    const firstRoute = state.permissionList[0];
    router.replace({
      name: firstRoute,
    });
  },
  [MUTATIONTYPES.LOGOUT](state: SETTINGSTATETYPE) {
    state.token = null;
    sessionStorage.clear();
    router.replace("/");
    ElMessage.closeAll();
    ElMessage.success({
      message: "退出成功",
    });
  },
};

const actions = {
  async [MUTATIONTYPES.SETROUTERS]({ commit, state, dispatch }: any) {
    asyncRoutes.forEach((item) => {
      if (state.permissionList.includes(item.name as RouteRecordRaw)) {
        router.addRoute("container", item);
      }
    });
    commit(MUTATIONTYPES.SETROUTERS, state.menuList);
  },
  async [MUTATIONTYPES.LOGIN]({ commit, dispatch }: any, params) {
    var data = await axios.Login.login(params);
    console.log(data, "data");
    commit(MUTATIONTYPES.SETROUTERS, menuList);
    await dispatch(MUTATIONTYPES.SETROUTERS);
    commit(MUTATIONTYPES.LOGIN);
  },
  async [MUTATIONTYPES.LOGOUT]({ commit }: any) {
    await axios.Login.logout({});
    commit(MUTATIONTYPES.LOGOUT);
  },
};

const getters = {
  menuList: (state: SETTINGSTATETYPE) => state.menuList,
  token: (state: SETTINGSTATETYPE) => state.token,
  crumbList: (state: SETTINGSTATETYPE) => state.crumbList,
};

export default { state, getters, mutations, actions, namespaced: true };
