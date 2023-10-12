import React, { ReactNode } from 'react'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'

declare global {
  interface Flattenable<T> {
    children?: T[]
  }

  interface UserStore {
    menus: MenuItemType[]
    routes: RouteObject[]
    addRoutes: (routes: RouteObject[]) => void
    setMenus: (menus: MenuItemType[]) => void
  }

  interface RouteObject {
    path?: string
    index?: boolean
    element?: ReactNode
    meta?: RouteMeta
    children?: RouteObject[]
  }

  interface RouteMeta {
    key?: string
    label?: string
    auth?: boolean
  }

  export interface TabContextType {
    tabs: TabType[]
    activeKey: string
    setTabs: React.Dispatch<React.SetStateAction<TabType[]>>
    setActiveKey: React.Dispatch<React.SetStateAction<string>>
    removeTab: (targetKey: string, callBackFun: () => void) => void
  }

  export interface TabType {
    key: string
    label: string
    children: ReactNode
    disabled?: boolean
    forceRender?: boolean
    closeIcon?: ReactNode // 在 type="editable-card" 时有效。设置为 null 或 false 时隐藏关闭按钮
  }
}

export {}
