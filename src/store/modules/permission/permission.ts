// @ts-ignore: Unreachable code error
import router, { asyncRoutes, constantRoutes, RouteRecordRaw } from "@/router";
import { getRouterName } from "@/utils/routers";
import { SETTINGSTATETYPE, MUTATIONTYPES } from "./permission_d";
import axios from "@/api";
import menuList from "@/router/menu";
const state: SETTINGSTATETYPE = {
  menuList: [], //菜单权限
  isSidebarNavCollapse: false,
  token: null, // login  登录 退出设置 null
};

const mutations = {
  [MUTATIONTYPES.SETROUTERS](state: SETTINGSTATETYPE, menuList: RouteRecordRaw[]) {
    state.menuList = menuList;
  },
  [MUTATIONTYPES.LOGIN](state: SETTINGSTATETYPE, token: string) {
    state.token = "login";
    const firstRoute = router.getRoutes()[0];
    console.log(firstRoute, "firstRoute");
    router.replace({
      name: firstRoute.name,
    });
  },
  [MUTATIONTYPES.LOGOUT](state: SETTINGSTATETYPE) {
    state.token = null;
    router.replace('login');
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
};

export default { state, getters, mutations, actions, namespaced: true };
