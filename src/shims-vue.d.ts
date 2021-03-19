

// @ts-ignore: Unreachable code error
import { ElMessage } from 'ElementPlus'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: ElMessage
  }
}

// @ts-ignore: Unreachable code error
declare module 'nprogress'