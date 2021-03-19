
// @ts-ignore: Unreachable code error
import elementPlus, { ElMessage } from 'ElementPlus';
export default function loadComponent(app: any) {

  app.config.globalProperties.$message = ElMessage;
  app.use(elementPlus)
}
