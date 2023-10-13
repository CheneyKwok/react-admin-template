declare global {
  interface RouteStore {
    routes: RouteRecord[]
    menuRoutes: RouteRecord[]
    loadMenuRoutes: () => Promise<boolean>
  }
}

export {}
