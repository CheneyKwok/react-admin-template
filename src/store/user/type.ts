import { ReactNode } from 'react'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'

export interface UserStore {
  menus: MenuItemType[]
  routes: RouteObject[]
  addRoutes: (routes: RouteObject[]) => void
  setMenus: (menus: MenuItemType[]) => void
}

export interface RouteObject {
  path?: string
  index?: boolean
  element?: ReactNode
  meta?: RouteMeta
  children?: RouteObject[]
}

export interface RouteMeta {
  key?: string
  label?: string
  auth?: boolean
}