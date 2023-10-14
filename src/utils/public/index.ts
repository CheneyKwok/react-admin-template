import React from 'react'
import * as Icons from '@ant-design/icons'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'
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
  console.log('enter searchRoute============================')
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

// 动态渲染 Icon 图标
const customIcons: { [key: string]: any } = Icons

export const formatMenus = (authRoutes: RouteRecord[]): MenuItemType[] => {
  return authRoutes.reduce((pre: MenuItemType[], cur) => {
    const { fullPath, meta, children } = cur
    if (meta) {
      const menu: MenuItemType = {
        key: fullPath || '',
        label: meta.title,
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

export const filterObject = (obj: object | undefined) => {
  if (obj) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
    const filterObj = omitBy(obj, (value) => value === undefined || value == null || value === '')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Object.keys(obj).length ? filterObj : null
  }
  return null
}
