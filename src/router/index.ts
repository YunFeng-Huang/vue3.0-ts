import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const login = resolve => require(['@/views/login/index.vue'], resolve);
const _403 = resolve => require(['@/views/error/403.vue'], resolve);
const _404 = resolve => require(['@/views/error/404.vue'], resolve);
// const empty = resolve => require(['@/views/layout/component/main-content/index.vue'], resolve);
const layout = resolve => require(['@/views/layout/index.vue'], resolve);
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
    component: () => { },
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
