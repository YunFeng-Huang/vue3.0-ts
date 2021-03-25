import { RouteLocationNormalized } from "vue-router";
//提取路由权限
export function getRouterName(menu: any[], AllName: string[], deep?: string) {
    return menu.map((v, i) => {
        if (deep) v.deep = deep + "-" + (i + 1);
        if (v.children) {
            getRouterName(v.children, AllName, v.deep);
        }
        AllName.push(v.path);
    });
}
// //提取本地路由权限
// export function getLocalRouterPath(arr: any[], AllName: string[]) {
//     return arr.map((v, i) => {
//         if (v.children) {
//             getLocalRouterPath(v.children, AllName);
//         } else {
//             AllName.push(v.path);
//         }
//     });
// }
//合并路由参数
export function mergeRoutersMeta(
    menuList: any[],
    to: RouteLocationNormalized,
    parent?: string
) {
    menuList.map((v, i) => {
        v.parent = parent + "/" + v.title;
        if (v.children) {
            mergeRoutersMeta(v.children, to, v.parent);
        } else {
            if (to.name == v.path) {
                to.meta = {
                    ...to.meta,
                    ...v.meta,
                    ...{ title: v.title, breadcrumb: v.parent.slice(1) },
                };
            }
        }
    });
    return menuList;
}
