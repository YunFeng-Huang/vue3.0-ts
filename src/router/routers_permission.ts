import router, { asyncRoutes } from "@/router";
import store, { STOREMUTATIONTYPES } from "@/store";
import { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { setSessionStorage } from "@/utils/storage";
import { mergeRoutersMeta } from "@/utils/routers";
NProgress.configure({ showSpinner: false });
//不经过token校验的路由
const routesWhiteList = ["/login", "/404", "/403"];
router.beforeEach(
    async (
        to: RouteLocationNormalized,
        _from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => {
        console.log(to);
        const hasToken = store.getters["permission/token"];
        const menuList = store.getters["permission/menuList"];
        const permissionList = store.getters["permission/permissionList"];
        const firstRoute = permissionList[0];
        console.log(router.getRoutes(), 'getRoutes');
        NProgress.start();

        // console.log(hasToken, 'hasToken');
        // console.log(permissionList, 'permissionList');
        // console.log(firstRoute, 'firstRoute');
        // 判断是否已经登录
        if (hasToken) {
            if (to.path === "/login" || to.path === "/") {
                next({ name: firstRoute });
            } else {
                // console.log(menuList.length > 0, router.getRoutes().length > 3, "menuList.length > 0 && router.getRoutes().length > 5")
                // 判断是否已经添加权限
                if (menuList.length > 0 && router.getRoutes().length > 3) {
                    if (to.name != "404" && to.name != "403") {
                        const localRouterName = store.getters["permission/localRouterName"];
                        if (!localRouterName.includes(to.name)) {
                            next({ name: "404" });
                        } if (!permissionList.includes(to.name)) {
                            next({ name: "403" });
                        } else {
                            next();
                        }
                    } else {
                        next();
                    }

                } else {
                    try {
                        await store.dispatch(
                            "permission/" + STOREMUTATIONTYPES.PERMISSION.SETROUTERS
                        );
                        next({ ...to, replace: true });
                    } catch {
                        next();
                    }

                }
            }
        } else {
            if (routesWhiteList.includes(to.path)) {
                next();
            } else {
                next({ path: "/login", replace: true });
            }
        }
        NProgress.done();
    }
);
router.afterEach((to: RouteLocationNormalized) => {
    const menuList: RouteRecordRaw[] = store.getters["permission/menuList"];
    // 获取菜单中的页面权限，并添加到路由meta中
    mergeRoutersMeta(menuList, to, "");
    to.meta && to.meta.title && (document.title = to.meta.title.toString());
    to.meta && to.meta.breadcrumb && store.commit('permission/' + STOREMUTATIONTYPES.PERMISSION.SETCRUBLIST, to.meta.breadcrumb);
    //持久化store
    setSessionStorage("store", JSON.stringify(store.state));
    NProgress.done();
});
