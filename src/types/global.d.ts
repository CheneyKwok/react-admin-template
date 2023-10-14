import { ReactNode } from 'react'

declare global {
  interface Flattenable<T> {
    children?: T[]
  }

  interface RouteRecord {
    path?: string
    fullPath?: string
    index?: boolean
    redirect?: string
    component?: string
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
