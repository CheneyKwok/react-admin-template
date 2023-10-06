import rootRoutes from '@/router/'
import { RouteType } from '@/types'

export interface FlattenT {
  children?: FlattenT[]
}
export const flattenRoutes = <T extends FlattenT>(routes: T[]): T[] => {
  return routes.reduce((prev: T[], cur) => {
    prev.push(cur)
    if (Array.isArray(cur.children)) {
      prev = prev.concat(flattenRoutes(cur.children) as [])
    }
    return prev
  }, [])
}

export const getRouteByPathname = (pathname: string = '/404'): RouteType => {
  console.log('pathname:', pathname)
  if (pathname === '/') pathname = '/home'
  const routes = flattenRoutes(rootRoutes)
  console.log('flattenRoutes', routes)
  const curRoute = routes.find((route) => route.path === pathname)
  console.log('curRoute', curRoute)
  if (!curRoute) {
    throw new Error('curRoute is null')
  }
  return curRoute
}