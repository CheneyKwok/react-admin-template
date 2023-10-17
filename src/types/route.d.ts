import { ReactNode } from 'react'

declare global {
  interface RouteConfig {
    path: string
    index?: boolean
    redirect?: string
    component?: string
    meta?: RouteMeta
    children?: RouteConfig[]
  }

  interface RouteRecord {
    path: string
    fullPath?: string
    index?: boolean
    redirect?: string
    element?: ReactNode
    meta?: RouteMeta
    children?: RouteRecord[]
  }

  interface RouteMeta {
    auth?: boolean
    hidden?: boolean
    title?: string
    notPage?: boolean
    icon?: string
  }
}

export {}
