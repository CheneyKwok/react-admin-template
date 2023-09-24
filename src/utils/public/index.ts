import rootRoutes from '@/router'
import { RouteType } from '@/types'

export const flattenRoutes = (routes: RouteType[]): RouteType[] => {
  return routes.reduce((prev, cur) => {
    prev.push(cur)
    if (Array.isArray(cur.children)) {
      prev = prev.concat(flattenRoutes(cur.children))
    }
    return prev
  }, [])
}

export const getRouteByPathname = (pathname: string = '/404') => {
  console.log('pathname:', pathname)
  if (pathname === '/') pathname = '/home'
  pathname = pathname.split('/')[1]
  const routes = flattenRoutes(rootRoutes)
  const curRoute = routes.filter((route) => route.path === pathname)
  if (!curRoute[0]) {
    throw new Error('curRoute is null')
  }
  return curRoute[0]
}
