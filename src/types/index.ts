import React, { ReactNode } from 'react'

export interface ReactPropsType {
  children: ReactNode
}

export interface RouteType {
  path?: string
  label?: string
  key?: string
  auth?: boolean
  index?: boolean
  element: ReactNode
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
  label: ReactNode
  children: ReactNode
  disabled?: boolean
  forceRender?: boolean
  closeIcon?: ReactNode // 在 type="editable-card" 时有效。设置为 null 或 false 时隐藏关闭按钮
}
