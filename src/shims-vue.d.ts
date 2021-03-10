/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'axios'
// declare module '@/*'
declare module 'element-plus'
// declare module '*.css';
// declare module '*.scss';
// declare module '*.sass';
// declare module '*.svg';
// declare module '*.png';
// declare module '*.jpg';
// declare module '*.jpeg';
// declare module '*.gif';
// declare module '*.ts';
declare module "vue/types/vue" {
  import VueRouter, { Route } from 'vue-router';
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $http: any;
    $Message: any;
    $Modal: any;
  }
}
declare module "*.vue" {
  import { ComponentOptions } from "vue"
  const componentOptions: ComponentOptions
  export default componentOptions
}
