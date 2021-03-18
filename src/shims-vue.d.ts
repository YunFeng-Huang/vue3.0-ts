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
declare module "*.vue" {
  import { ComponentOptions } from "vue"
  const componentOptions: ComponentOptions
  export default componentOptions;
}


import { AxiosInstance } from 'axios'

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $Api?: AxiosInstance
  }
}