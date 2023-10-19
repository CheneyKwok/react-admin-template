import React, { ReactNode } from 'react'

declare global {
  interface RouterOptions {
    path: string
    query?: Record<string, any>
    params?: Record<string, any>
  }

  interface RouteLocation {
    path: string
    fullPath: string
    hash: string
    query: Record<string, object>
    params: Record<string, object>
    matchedRoute: RouteRecord | undefined
    matchedRoutes: RouteRecord[]
  }

  interface TabContextType {
    tabs: TabType[]
    activeKey: string
    addTab: (tab: TabType) => void
    setActiveKey: React.Dispatch<React.SetStateAction<string>>
    removeTab: (targetKey: string, callBackFun: () => void) => void
  }

  interface TabType {
    key: string
    label: string
    closeIcon?: ReactNode // 在 type="editable-card" 时有效。设置为 null 或 false 时隐藏关闭按钮
  }
}

export {}
