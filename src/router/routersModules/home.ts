import { RouteRecordRaw } from "vue-router";


const home = resolve => require(['@/views/home/index.vue'], resolve);
const home1 = resolve => require(['@/views/home/index copy.vue'], resolve);
const home2 = resolve => require(['@/views/home/index copy 2.vue'], resolve);
const home3 = resolve => require(['@/views/home/index copy 3.vue'], resolve);
const home4 = resolve => require(['@/views/home/index copy 4.vue'], resolve);
const home5 = resolve => require(['@/views/home/index copy 5.vue'], resolve);

// import '@/views/home/index copy 5.vue'
const HomeRouter: Array<RouteRecordRaw> = [
  {
    path: "home",
    name: "home",
    component: home,
    redirect: '/home/home2',
    children: [
      {
        path: "home2",
        name: "home2",
        component: home2,
        meta: {
          title: "home2",
        },
        children: [
          {
            path: "home5",
            name: "home5",
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
        name: "home4",
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
