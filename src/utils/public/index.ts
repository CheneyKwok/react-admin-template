import { omitBy } from 'lodash'

export const flattenRoutes = <T extends Flattenable<T>>(routes: T[]): T[] => {
  return routes.reduce((prev: T[], cur) => {
    prev.push(cur)
    if (Array.isArray(cur.children)) {
      prev = prev.concat(flattenRoutes(cur.children))
    }
    return prev
  }, [])
}

export const searchRoute = (path: string, routes: RouteRecord[] = []): RouteRecord | undefined => {
  let route = undefined
  for (const item of routes) {
    if (item.path === path) return item
    if (item.children) {
      const res = searchRoute(path, item.children)
      if (res && Object.keys(res).length) route = res
    }
  }
  if (!route && path === '/') {
    route = searchIndexRoute(routes)
  }
  return route
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

export const filterObject = (obj: object | undefined) => {
  if (obj) {
    const filterObj = omitBy(obj, (value) => value === undefined || value == null || value === '')
    return Object.keys(obj).length ? filterObj : null
  }
  return null
}
