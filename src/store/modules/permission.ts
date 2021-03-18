// @ts-ignore: Unreachable code error
import router, { asyncRoutes, constantRoutes, RouteRecordRaw } from "@/router";
import { getRouterName } from "@/utils/routers";
import HomeRouter from "@/router/routersModules/home";
import menu from "@/router/menu";
import { createRouter } from "vue-router";
// interface permissionListType {
//   title?: string;
//   path?: string;
//   children?: [];
// }
export interface permissionState {
  menuList?: RouteRecordRaw[];
  isSidebarNavCollapse?: Boolean;
  // menu?: RouteRecordRaw[];
}
const state: permissionState = {

  menuList: menu,
  isSidebarNavCollapse: false,
  // menu: menu
};

export enum MUTATIONTYPES {
  SETROUTERS = "SETROUTERS",
}

const mutations = {
  [MUTATIONTYPES.SETROUTERS](state, menuList) {
    state.menuList = menuList;
  },
};


const actions = {
  async [MUTATIONTYPES.SETROUTERS]({ commit, state }: any) {
    let menu = JSON.parse(JSON.stringify(state.menuList));
    let AllName = [];
    getRouterName(menu, AllName)
    asyncRoutes.map((item) => {
      if ([...new Set(AllName)].includes(item.name)) {
        router.addRoute('container', item);
        return item
      }
    });
    commit(MUTATIONTYPES.SETROUTERS, menu);
    return asyncRoutes;
  },
};

const getters = {
  menuList: (state: permissionState) => state.menuList,
};

export default { state, getters, mutations, actions, namespaced: true };
