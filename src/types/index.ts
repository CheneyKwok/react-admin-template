import React, { ReactNode } from 'react'

export interface ReactProps {
  // children: React.ReactElement | null
  children: ReactNode
}

export interface RouteMeta {
  key?: string
  label?: string
  auth?: boolean
}

export interface RouteObject {
  path?: string
  index?: boolean
  element?: ReactNode
  meta?: RouteMeta
  children?: RouteObject[]
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

export interface Flattenable<T> {
  children?: T[]
}

export interface MenuObject {
  key: string
  index: string
  icon: ReactNode
  label: ReactNode
}