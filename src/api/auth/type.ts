import { RouteMeta } from '@/store/user/type.ts'
import { Flattenable } from '@/utils/public/type.ts'

export interface AuthRoute extends Flattenable<AuthRoute> {
  path?: string
  index?: boolean
  element: string
  meta?: RouteMeta
  children?: AuthRoute[]
}