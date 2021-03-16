// @ts-ignore: Unreachable code error
import router, { asyncRoutes, constantRoutes, RouteRecordRaw } from "@/router";
// import { filterRoutes } from "@/utils/routers";
import HomeRouter from "@/router/routersModules/home";
import menu from "@/router/menu";
import { createRouter } from "vue-router";
interface permissionListType {
  name?: string;
  id?: number;
}
export interface permissionState {
  // permissionList?: permissionListType[] | null;
  // token?: string | null;
  menuList?: RouteRecordRaw[];
  isSidebarNavCollapse?: Boolean;
  // twosidebarMenu?: RouteRecordRaw[];
  // threeSidebarMenu?: RouteRecordRaw[];
}
const state: permissionState = {
  // permissionList: [],
  // token: "",
  menuList: [],
  isSidebarNavCollapse: false,
  // twosidebarMenu: constantRoutes,
  // threeSidebarMenu: [],
};

export enum MUTATIONTYPES {
  SETROUTERS = "SETROUTERS",
}

const mutations = {
  [MUTATIONTYPES.SETROUTERS](state) {
    state.menuList = menu;
    console.log(state.menuList, 'state.menuList')
    // state.menuList = replace_router(routesAll, menu);
    // state.permissionList = routers;
  },
};



// function replace_router(routesAll, menu) {
//   menu.map((v, i) => {
//     if (v.children) {
//       replace_router(routesAll, v.children)
//     } {
//       let { name } = v
//       let item = recursive(routesAll, name)
//       console.log(item, 'item')
//       // menu[i] = item;
//     }
//   });
//   return menu;
// }

// function recursive(routesAll, name) {
//   let item;
//   routesAll.some((v, i) => {
//     if (v.children) {
//       recursive(v.children, name)
//     }
//     if (v.name == name) {
//       item = v;
//       return true;
//     }
//     return false;
//   });
//   return item;
// }
let nameAll = []
function get_router_name(asyncRoutes) {
  asyncRoutes.map((v, i) => {
    nameAll.push(v.path);
    if (v.children) {
      get_router_name(v.children)
    }
  });
  return asyncRoutes
}

const actions = {
  async [MUTATIONTYPES.SETROUTERS]({ commit }: any) {
    nameAll = [];
    get_router_name(menu)
    let newAsyncRoutes = asyncRoutes.map((item) => {
      if (nameAll.includes(item.name)) {
        router.addRoute('container', item);
        return item
      }
    }).filter(Boolean);
    console.log(router.getRoutes(), 'getRoutes1');
    // router.options.routes[0].children = [...router.options.routes[0].children, ...newAsyncRoutes];
    commit(MUTATIONTYPES.SETROUTERS);
    return asyncRoutes;
  },
};

const getters = {
  menuList: (state: permissionState) => state.menuList,
  // hasToken: (state: permissionState) => state.token != null,
};

export default { state, getters, mutations, actions, namespaced: true };
