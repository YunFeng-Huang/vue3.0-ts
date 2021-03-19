/* eslint-disable */

// 文件路径 shims-vue.d.ts
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $Api: any // 这里可以用$Api具体的类型代替any
//   }
// }

// import { apiType } from "./api/index_d";
// declare module "@vue/runtime-core" {
//   interface ComponentCustomProperties {
//     $api: apiType;
//   }
// }
