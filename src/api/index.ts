const files = require.context('./modules', false, /\.js$/)
const modules: any = {}
files.keys().forEach(key => {
  if (key === "./index.ts") return;
  modules[key.replace(/(\.\/|\.ts)/g, "")] = files(key).default;
});
Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})
export default modules


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