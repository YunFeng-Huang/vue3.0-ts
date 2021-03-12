
// import { RouteRecordRaw } from "@/router"

let rolesControl = false //是否开启roles字段进行角色权限控制
export function filterRoutes(routes, baseUrl = '/') {
    return routes
    // .filter((route) => {
    //     if (route.meta && route.meta.roles)
    //         return !rolesControl || hasRole(route.meta.roles)
    //     else return true
    // })
    // .map((route) => {
    //     if (route.path !== '*' && !isExternal(route.path))
    //         route.path = path.resolve(baseUrl, route.path)
    //     route.fullPath = route.path
    //     if (route.children)
    //         route.children = filterRoutes(route.children, route.fullPath)
    //     return route
    // })
}
