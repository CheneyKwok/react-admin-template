import React, { lazy } from 'react'
import * as Icons from '@ant-design/icons'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'

import lazyLoad from '@/router/Suspense'
import { importFCComponent } from '@/utils/modules'

import AuthRoute = Api.AuthRoute

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

export const searchIndexRoute = (routes: RouteObject[] = []): RouteObject | undefined => {
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
      element: lazyLoad(lazy(importFCComponent(element))),
    }
    if (path) loadedRoute.path = path
    if (index) loadedRoute.index = index
    if (meta) loadedRoute.meta = meta
    if (children) loadedRoute.children = loadRoutes(children)
    loadedRoutes.push(loadedRoute)
  })
  return loadedRoutes
}
