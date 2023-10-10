import React, { lazy } from 'react'
import * as Icons from '@ant-design/icons'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'

import { AuthRoute } from '@/api/auth/type.ts'
import lazyLoad from '@/router/Suspense'
import { RouteObject } from '@/store/user/type.ts'
import { Flattenable } from '@/utils/public/type.ts'

export const flattenRoutes = <T extends Flattenable<T>>(routes: T[]): T[] => {
  return routes.reduce((prev: T[], cur) => {
    prev.push(cur)
    if (Array.isArray(cur.children)) {
      prev = prev.concat(flattenRoutes(cur.children))
    }
    return prev
  }, [])
}

export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject | undefined => {
  let route = undefined
  for (const item of routes) {
    if (item.path === path) return item
    if (item.children) {
      const res = searchRoute(path, item.children)
      if (res && Object.keys(res).length) route = res
    }
  }
  return route
}

// 动态渲染 Icon 图标
const customIcons: { [key: string]: any } = Icons

export const formatMenus = (authRoutes: AuthRoute[]): MenuItemType[] => {
  return authRoutes.reduce((pre: MenuItemType[], cur) => {
    const { meta, children } = cur
    if (meta) {
      const menu: MenuItemType = {
        key: meta.key as string,
        label: meta.label,
        icon: React.createElement(customIcons['HomeOutlined']),
      }
      pre.push(menu)
    }
    if (children && Array.isArray(children)) {
      pre = pre.concat(formatMenus(children))
    }
    return pre
  }, [])
}

export const loadRoutes = (routes: AuthRoute[]) => {
  const loadedRoutes: RouteObject[] = []
  routes.forEach((route: AuthRoute) => {
    const { path, index, element, meta, children } = route
    const loadedRoute: RouteObject = {
      element: lazyLoad(lazy<any>(() => import(element))),
    }
    if (path) loadedRoute.path = path
    if (index) loadedRoute.index = index
    if (meta) loadedRoute.meta = meta
    if (children) loadedRoute.children = loadRoutes(children)
    loadedRoutes.push(loadedRoute)
  })
  return loadedRoutes
}

// export const getRouteByPathname = (pathname: string = '/404'): RouteType => {
//   console.log('pathname:', pathname)
//   if (pathname === '/') pathname = '/home'
//   const routes = flattenRoutes(rootRoutes)
//   console.log('flattenRoutes', routes)
//   const curRoute = routes.find((route) => route.path === pathname)
//   console.log('curRoute', curRoute)
//   if (!curRoute) {
//     throw new Error('curRoute is null')
//   }
//   return curRoute
// }