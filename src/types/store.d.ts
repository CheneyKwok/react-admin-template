
declare global {

  interface UserStore {
    needLoadMenus: boolean
    setNeedLoadMenus: (needLoadMenus: boolean) => void
  }

  interface RouteStore {
    routes: RouteRecord[]
    menuRoutes: RouteRecord[]
    loadMenuRoutes: () => Promise<void>
  }
}

export {}
