
declare global {

  interface UserStore {
    loadMenus: boolean
    setLoadMenu: (loadMenus: boolean) => void
  }

  interface RouteStore {
    routes: RouteRecord[]
    menuRoutes: RouteRecord[]
    loadMenuRoutes: () => Promise<void>
  }
}

export {}
