import React, { ReactNode } from 'react'

export interface ReactPropsType {
  // children: React.ReactElement | null
  children: ReactNode
}

export interface RouteMetaType {
  key: string
  label: string
  auth?: boolean
}

export interface RouteType {
  path?: string
  index?: boolean
  element: ReactNode
  meta?: RouteMetaType
  children?: RouteType[]
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
