

// @ts-ignore: Unreachable code error
import { ElMessage } from 'ElementPlus'
// import { apiType } from './api/index_d';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: ElMessage,
    // $api: any
  }
}

// @ts-ignore: Unreachable code error
declare module 'nprogress'