import router, { constantRoutes } from "@/router";
import store, { storeMutationTypes } from "@/store";
import { RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false });
//不经过token校验的路由
const routesWhiteList = ["/login", "/register", "/callback", "/404", "/403"];

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    let hasToken = store.getters["user/token"];
    if (hasToken) {
        if (to.path === "/login") {
            next({ path: "/" });
            NProgress.done();
        } else {
            console.log(2);
            const hasRoles = store.getters["permission/permissionList"].length > 0 || true;
            if (hasRoles) {
                next();
            } else {
                try {
                    const finallyRoutes = await store.dispatch("permission/SETROUTERS");
                    console.log(finallyRoutes, "finallyRoutes");
                    finallyRoutes.forEach((item: RouteRecordRaw) => {
                        router.addRoute(item as RouteRecordRaw);
                    });
                    console.log(to);
                    next();
                    // next({ ...to, replace: true });
                } catch {
                    // console.log('catch')
                    // await store.dispatch('user/resetAll')
                    next({ path: "/login", replace: true });
                    NProgress.done();
                }
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
router.afterEach((to) => {
    console.log(to, "after");
    NProgress.done();
});
