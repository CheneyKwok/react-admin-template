import { validateURL } from '@/utils/public/validate.ts'

export const formatRoutes = (routes: RouteRecord[], parentFullPath = ''): RouteRecord[] => {
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

export const searchIndexRoute = (routes: RouteRecord[] = []): RouteRecord | undefined => {
    let route = undefined
    for (const item of routes) {
        if (item.index) return item
        if (item.children) {
            const res = searchIndexRoute(item.children)
            if (res?.index) route = res
        }
    }
    return route
}
