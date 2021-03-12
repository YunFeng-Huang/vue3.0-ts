// @ts-ignore: Unreachable code error
import { asyncRoutes, constantRoutes, RouteRecordRaw } from "@/router";
import { filterRoutes } from "@/utils/routers";
import router from "@/router";
import HomeRouter from "@/router/routersModules/home";
interface permissionListType {
  name?: string;
  id?: number;
}
export interface permissionState {
  permissionList?: permissionListType[] | null;
  token?: string | null;
  routes?: RouteRecordRaw[];
  isSidebarNavCollapse?: Boolean;
  twosidebarMenu?: RouteRecordRaw[];
  threeSidebarMenu?: RouteRecordRaw[];
}

const state: permissionState = {
  permissionList: [],
  token: "",
  routes: [],
  isSidebarNavCollapse: false,
  twosidebarMenu: HomeRouter,
  threeSidebarMenu: [],
};


export enum MutationTypes {
  SETROUTERS = 'SETROUTERS',
}

const mutations = {
  [MutationTypes.SETROUTERS](state: permissionState, routes: RouteRecordRaw[]) {
    state.routes = routes;
  },
};
const actions = {
  async [MutationTypes.SETROUTERS]({ commit }: any) {
    const finallyRoutes = filterRoutes([...constantRoutes, ...asyncRoutes]);
    commit("SETROUTERS", finallyRoutes);
    return asyncRoutes;
  },
};

const getters = {
  permissionList: (state: permissionState) => state.permissionList,
  hasToken: (state: permissionState) => state.token != null,
};

export default { state, getters, mutations, actions, namespaced: true };
