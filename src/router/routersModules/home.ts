import { RouteRecordRaw } from "vue-router";
const layout = () => import("@/views/layout/index.vue");
const HomeRouter: Array<RouteRecordRaw> = [
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
];
export default HomeRouter;
