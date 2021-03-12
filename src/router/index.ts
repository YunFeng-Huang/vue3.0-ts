import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const login = () => import("@/views/login/index.vue");
const _403 = () => import("@/views/403.vue");
const _404 = () => import("@/views/404.vue");
const empty = () => {};
const layout = () => import("@/views/layout/index.vue");

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "/",
    component: layout,
    redirect: "/index",
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "index",
        name: "Index",
        component: layout,
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/403",
    name: "403",
    component: _403,
  },
  {
    path: "/404",
    name: "404",
    component: _404,
  },

  {
    path: "/error",
    name: "Error",
    component: empty,
    redirect: "/error/403",
    meta: {
      title: "错误页",
      icon: "error-warning-line",
    },
    children: [
      {
        path: "403",
        name: "Error403",
        component: _403,
        meta: {
          title: "403",
          icon: "error-warning-line",
        },
      },
      {
        path: "404",
        name: "Error404",
        component: _404,
        meta: {
          title: "404",
          icon: "error-warning-line",
        },
      },
    ],
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
console.log(constantRoutes, "constantRoutes");
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
