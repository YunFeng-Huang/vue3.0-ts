

import { ElMessage } from 'ElementPlus'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: ElMessage
  }
}

declare module 'nprogress'