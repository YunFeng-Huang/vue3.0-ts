import router from "@/router";
import store, { STOREMUTSTIONTYPES } from "@/store";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { setSessionStorage } from "@/utils/storage";
NProgress.configure({ showSpinner: false });
//不经过token校验的路由
const routesWhiteList = ["/login", "/404", "/403"];

router.beforeEach(async (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start();
    let hasToken = store.getters["user/token"];
    if (hasToken) {
        if (to.path === "/login") {
            next({ path: "/" });
            NProgress.done();
        } else {
            const menuList = store.getters["permission/menuList"];
            console.log(router.getRoutes(), 'getRoutes')
            if (menuList.length > 0 && router.getRoutes().length > 5) {
                next();
            } else {
                try {
                    await store.dispatch("permission/" + STOREMUTSTIONTYPES.PERMISSION.SETROUTERS);
                    next({ ...to, replace: true })
                } catch {
                    next({ path: '/login', replace: true })
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
});
router.afterEach((to: RouteLocationNormalized) => {
    setSessionStorage('store', JSON.stringify(store.state));
    NProgress.done();
});
