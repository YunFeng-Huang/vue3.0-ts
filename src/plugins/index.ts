
import { createApp } from 'vue'
import axios from "@/api";

export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  app.config.globalProperties.$api = axios;
  const files = require.context('.', true, /\.ts$/)
  files.keys().forEach(key => {
    if (typeof files(key).default === 'function') {
      if (key !== './index.ts') files(key).default(app)
    }
  })
}

