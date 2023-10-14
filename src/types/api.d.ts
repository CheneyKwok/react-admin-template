
declare namespace Api {

   interface LoginParams {
    username: string
    password: string
  }

   interface LoginRes {
    token: string
  }

  interface MenuRoute extends Flattenable<MenuRoute> {
    path: string
    index?: boolean
    redirect?: string
    component: string
    meta?: RouteMeta
    children?: MenuRoute[]
  }

}
