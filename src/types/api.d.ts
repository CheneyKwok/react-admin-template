
declare namespace Api {

   interface LoginParams {
    username: string
    password: string
  }

   interface LoginRes {
    token: string
  }

  interface AuthRoute extends Flattenable<AuthRoute> {
    path?: string
    index?: boolean
    element: string
    meta?: RouteMeta
    children?: AuthRoute[]
  }

}
