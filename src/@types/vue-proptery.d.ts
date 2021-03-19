
// import { ElMessage } from 'element-plus'
// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $api?: any,// 这里可以用$Api具体的类型代替any
//     $message?: any
//   }
// }
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module 'vue-router' {
//   interface RouteMeta {
//     roles?: string[]
//   }
// }
