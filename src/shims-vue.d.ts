

// @ts-ignore: Unreachable code error
import { ElMessage, ElConfirm } from 'ElementPlus'
// import { apiType } from './api/index_d';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: ElMessage,
    $confirm: ElConfirm,
    $api: any
  }
}

// @ts-ignore: Unreachable code error
declare module 'nprogress'