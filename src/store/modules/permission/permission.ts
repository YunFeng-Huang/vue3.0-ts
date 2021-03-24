// @ts-ignore: Unreachable code error
import router, { asyncRoutes, constantRoutes, RouteRecordRaw } from "@/router";
import { getRouterName } from "@/utils/routers";
import { SETTINGSTATETYPE, MUTATIONTYPES } from "./permission_d";
import axios from "@/api";
import menuList from "@/router/menu";
// @ts-ignore: Unreachable code error
import { ElMessage } from "ElementPlus";
const state: SETTINGSTATETYPE = {
  menuList: [], //菜单权限
  token: null, // login  登录 退出设置 null
  crumbList: [], //面包屑
};

const mutations = {
  [MUTATIONTYPES.SETROUTERS](state: SETTINGSTATETYPE, menuList: RouteRecordRaw[]) {
    state.menuList = menuList;
  },
  [MUTATIONTYPES.SETCRUBLIST](state: SETTINGSTATETYPE, breadcrumb: string) {
    const crumbList = breadcrumb.toString().split(/\//).slice(1);
    console.log(crumbList, 'crumbList')
    state.crumbList = crumbList;
  },
  [MUTATIONTYPES.LOGIN](state: SETTINGSTATETYPE, token: string) {
    state.token = "login";
    const firstRoute = router.getRoutes()[0];
    router.replace({
      name: firstRoute.name,
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
  async [MUTATIONTYPES.SETROUTERS]({ commit, state }: any) {
    let menu = JSON.parse(JSON.stringify(state.menuList));
    let AllName: string[] = [];
    getRouterName(menu, AllName);
    asyncRoutes.map((item) => {
      if ([...new Set(AllName)].includes(item.name as RouteRecordRaw)) {
        router.addRoute("container", item);
        return item;
      }
    });
    commit(MUTATIONTYPES.SETROUTERS, menu);
    return asyncRoutes;
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
