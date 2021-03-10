
import router from '@/router';
import store from '@/store'

const loginInterception = true;   //是否开启登录拦截
//不经过token校验的路由
const routesWhiteList = ['/login', '/register', '/callback', '/404', '/403'];

router.beforeEach(async (to, from, next) => {
  let hasToken = store.getters['permission/accessToken']

  if (!loginInterception) hasToken = true

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasRoles = store.getters['permission/permissionList'].length > 0;
      if (hasRoles) {
        next()
      } else {
        try {
          if (loginInterception) {
            await store.dispatch('user/getUserInfo')
          } else {
            //loginInterception为false（关闭登录拦截时）时，创建虚拟角色
            await store.dispatch('user/setVirtualRoles')
          }

          let accessRoutes = await store.dispatch('routes/setRoutes');
          accessRoutes.forEach((item: any) => {
            router.addRoute(item)
          })

          next({ ...to, replace: true })
        } catch {
          await store.dispatch('user/resetAll')
          next({ path: '/login', replace: true })
        }
      }
    }
  } else {
    if (routesWhiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: '/login', replace: true })
    }
  }
})
// router.afterEach((to) => {
//   document.title = getPageTitle(to.meta.title)
// })
