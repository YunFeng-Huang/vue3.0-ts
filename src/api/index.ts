const modules = require.context("./modules", true, /index\.ts$/);
let obj = {};
modules.keys().forEach((key) => {
  const pathDeep = key.split("/").length,
    moduleConfig = modules(key);
  if (pathDeep === 3) {
    obj[`${key.split("/")[1]}`] = moduleConfig.default || moduleConfig;
  }
  if (pathDeep === 4) {
    obj[`${key.split("/")[1] + key.split("/")[2]}`] =
      moduleConfig.default || moduleConfig;
  }
});
export default obj;

// let login = (params) => {
//   return requset({
//     url: requsetUrl(api['login']),
//     method: 'get',
//     params: params
//   })
// }
// let login = (params: any) => {
//   return requset({
//     url: requsetUrl(api['login']),
//     method: 'post',
//     data: requsetParam(params)
//   });
// };
// let logout = (params: any) => {
//   return requset({
//     url: requsetUrl(api['logout']),
//     method: 'post',
//     data: params
//   });
// };
