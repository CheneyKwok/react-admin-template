import React from 'react'
import * as Icons from '@ant-design/icons'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'

import { Flattenable, RouteObject } from '@/types'
import { AuthRoute } from '@/types/api'

export const flattenRoutes = <T extends Flattenable<T>>(routes: T[]): T[] => {
  return routes.reduce((prev: T[], cur) => {
    prev.push(cur)
    if (Array.isArray(cur.children)) {
      prev = prev.concat(flattenRoutes(cur.children))
    }
    return prev
  }, [])
}

export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
  let route: RouteObject = {}
  for (const item of routes) {
    if (item.path === path) return item
    if (item.children) {
      const res = searchRoute(path, item.children)
      if (Object.keys(res).length) route = res
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