import { ReactNode } from 'react'

declare global {
  interface RouteRecord {
    path?: string
    index?: boolean
    element?: ReactNode
    meta?: RouteMeta
    children?: RouteRecord[]
  }

  interface RouteMeta {
    key?: string
    label?: string
    auth?: boolean
  }
}
export {}
