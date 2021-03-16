import { RouteRecordRaw } from "vue-router";

export function getRouterName(asyncRoutes, AllName: string[]) {
    asyncRoutes.map((v, i) => {
        AllName.push(v.path);
        if (v.children) {
            getRouterName(v.children, AllName)
        }
    });
    return asyncRoutes
}

