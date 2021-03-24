import { RouteRecordRaw } from "vue-router";

const home = () => import("@/views/home/index.vue");
const home1 = () => import("@/views/home/index copy.vue");
const home2 = () => import("@/views/home/index copy 2.vue");
const home3 = () => import("@/views/home/index copy 3.vue");
const home4 = () => import("@/views/home/index copy 4.vue");
const home5 = () => import("@/views/home/index copy 5.vue");
// import '@/views/home/index copy 5.vue'
const HomeRouter: Array<RouteRecordRaw> = [
  {
    path: "home",
    name: "home",
    component: home,
    children: [
      {
        path: "home2",
        component: home2,
        meta: {
          title: "home2",
        },
        children: [
          {
            path: "home5",
            component: home5,
            meta: {
              title: "home5",
              keep: "none",
            },
          },
        ]
      },
      {
        path: "home4",
        component: home4,
        meta: {
          title: "home4",
        },
      },
    ]
  }, {
    path: "home1",
    name: "home1",
    component: home1,
    meta: {
      title: "home1",
    },
  },
  {
    path: "home3",
    name: "home3",
    component: home3,
    meta: {
      title: "home3",
    },
  },
];
export default HomeRouter;
