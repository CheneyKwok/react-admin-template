import { Flattenable, RouteMeta } from '@/types'

export interface AuthRoute extends Flattenable<AuthRoute> {
  path?: string
  index?: boolean
  element: string
  meta?: RouteMeta
  children?: AuthRoute[]
}