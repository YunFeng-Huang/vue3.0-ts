import { RouteLocationNormalized } from "vue-router";
//提取路由权限
export function getRouterName(menu: any[], AllName: string[]) {
    return menu.map((v, i) => {
        if (v.children) {
            getRouterName(v.children, AllName);
        } else {
            AllName.push(v.path);
        }
    });
}

//合并路由参数
export function mergeRoutersMeta(menuList: any[], to: RouteLocationNormalized, parent?: string) {
    menuList.map((v) => {
        v.parent = parent + '/' + v.title
        if (v.children) {
            mergeRoutersMeta(v.children, to, v.parent);
        } else {
            if (to.name == v.path) {
                to.meta = {
                    ...to.meta,
                    ...v.meta,
                    ...{ title: v.title, breadcrumb: v.parent },

                };
            }
        }
    });
    return menuList;
}
