import rootRoutes from '@/router/'
import { RouteType } from '@/types'

export const flattenRoutes = (routes: RouteType[]): RouteType[] => {
  return routes.reduce((prev: RouteType[], cur) => {
    prev.push(cur)
    if (Array.isArray(cur.children)) {
      prev = prev.concat(flattenRoutes(cur.children))
    }
    return prev
  }, [])
}

export const getRouteByPathname = (pathname: string = '/404'): RouteType => {
  console.log('pathname:', pathname)
  if (pathname === '/') pathname = '/home'
  const routes = flattenRoutes(rootRoutes)
  console.log('routes', routes)
  const curRoute = routes.find((route) => route.path === pathname)
  console.log('curRoute', curRoute)
  if (!curRoute) {
    throw new Error('curRoute is null')
  }
  return curRoute
}
