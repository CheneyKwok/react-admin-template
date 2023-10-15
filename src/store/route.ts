import { create } from 'zustand'

import { getMenuRoutes } from '@/api/auth'
import routes, { createRoutes } from '@/router'

const useRouteStore = create<RouteStore>((set) => ({
  routes: routes,
  menuRoutes: [],
  loadMenuRoutes: async () => {
    const { data } = await getMenuRoutes()
    const { routes, menuRoutes } = createRoutes(data)
    set(() => ({ routes, menuRoutes }))
  },
}))

export default useRouteStore
