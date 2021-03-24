import router from "@/router";
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
        NProgress.start();
        let hasToken = store.getters["permission/token"];
        // console.log(hasToken, 'hasToken');
        // 判断是否已经登录
        if (hasToken) {
            if (to.path === "/login") {
                next({ path: "/" });
                NProgress.done();
            } else {
                const menuList = store.getters["permission/menuList"];
                // console.log(menuList, 'hasToken');
                // 判断是否已经添加权限
                if (menuList.length > 0 && router.getRoutes().length > 5) {
                    next();
                } else {
                    try {
                        await store.dispatch(
                            "permission/" + STOREMUTATIONTYPES.PERMISSION.SETROUTERS
                        );
                        console.log(router.getRoutes(), 'getRoutes');
                        next({ ...to, replace: true });
                    } catch {
                        next({ path: "/login", replace: true });
                    }
                    NProgress.done();
                }
            }
        } else {
            if (routesWhiteList.includes(to.path)) {
                next();
            } else {
                next({ path: "/login", replace: true });
                NProgress.done();
            }
        }
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
