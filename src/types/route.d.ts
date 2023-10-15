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
    element?: ReactNode
    meta?: RouteMeta
    children?: RouteRecord[]
  }

  interface RouteMeta {
    auth?: boolean
    hidden?: boolean
    title?: string
    icon?: string
  }
}

export {}
