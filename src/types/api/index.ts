import { FlattenT } from '@/utils/public'

export interface RouteMeta {
  key: string
  label: string
  auth?: boolean
}

export interface AuthRoute extends FlattenT {
  path?: string
  index?: boolean
  element: string
  meta?: RouteMeta
  children?: AuthRoute[]
}