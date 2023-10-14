import constantRoutes, { routesRender } from '@/router/index.tsx'
import { validateURL } from '@/utils/public/validate.ts'

export const combineMenuRoutes = (menuRoutes: RouteRecord[]): RouteRecord[] => {
  const menuRoutesRender = routesRender(menuRoutes)
  const basicRoute = constantRoutes.find((route) => route.path === '/')
  if (basicRoute) {
    basicRoute.children = [...(basicRoute.children || []), ...menuRoutesRender]
  }
  return constantRoutes
}

export const formatRoutes = (routes: Api.MenuRoute[], parentFullPath = ''): RouteRecord[] => {
  return (
    routes
      // 过滤隐藏的路由
      .filter((route) => !route.meta?.hidden)
      // 处理 fullPath
      .map((route) => {
        let children
        let fullPath = route.path
        if (!validateURL(route.path)) {
          fullPath = parentFullPath + fullPath
          if (route.children?.length) {
            children = formatRoutes(route.children, fullPath === '/' ? fullPath : fullPath + '/')
          }
        }
        return {
          ...route,
          fullPath,
          children: children,
          meta: { ...route.meta },
        }
      })
  )
}
