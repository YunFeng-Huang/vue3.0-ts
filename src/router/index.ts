import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const login = () => import("@/views/login/index.vue");
const _403 = () => import("@/views/403.vue");
const _404 = () => import("@/views/404.vue");
const empty = () => import("@/views/layout/component/main-content/content.vue");
const layout = () => import("@/views/layout/index.vue");

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "container",
    component: layout,
    // redirect: "/index",
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "403",
        meta: {
          title: "403",
        },
        name: "403",
        component: _403,
      },
      {
        path: "404",
        meta: {
          title: "404",
        },
        name: "404",
        component: _404,
      },
    ],
  },
  {
    path: "/login",
    meta: {
      title: "login",
    },
    name: "login",
    component: login,
  },
  {
    path: "/*",
    redirect: "/404",
    component: empty,
  },
];

const asyncFiles = require.context("./routersModules", true, /\.ts$/);
let permissionModules: Array<RouteRecordRaw> = [];
asyncFiles.keys().forEach((key) => {
  if (key === "./index.ts") return;
  permissionModules = permissionModules.concat(asyncFiles(key).default);
});
export const asyncRoutes: Array<RouteRecordRaw> = [...permissionModules];
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: constantRoutes,
});


export default router;
