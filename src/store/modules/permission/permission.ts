// @ts-ignore: Unreachable code error
import router, { asyncRoutes, constantRoutes, RouteRecordRaw } from "@/router";
import { getRouterName } from "@/utils/routers";
// import HomeRouter from "@/router/routersModules/home";
// import menuList from "@/router/menu";
// import { createRouter } from "vue-router";
import { permissionState, MUTATIONTYPES } from "./permission_d";

const state: permissionState = {
  menuList: [],
  isSidebarNavCollapse: false,
};

const mutations = {
  [MUTATIONTYPES.SETROUTERS](state, menuList: RouteRecordRaw[]) {
    state.menuList = menuList;
  },
};


const actions = {
  async [MUTATIONTYPES.SETROUTERS]({ commit, state }: any) {
    let menu = JSON.parse(JSON.stringify(state.menuList));
    let AllName = [];
    getRouterName(menu, AllName);

    asyncRoutes.map((item) => {
      console.log(item)
      if ([...new Set(AllName)].includes(item.name)) {
        router.addRoute('container', item);
        return item
      }
    });
    console.log(router.getRoutes(), "router.getRoutes()");
    commit(MUTATIONTYPES.SETROUTERS, menu);
    return asyncRoutes;
  },
};

const getters = {
  menuList: (state: permissionState) => state.menuList,
};

export default { state, getters, mutations, actions, namespaced: true };
