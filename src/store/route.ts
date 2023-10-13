import { create } from 'zustand'

import { getMenuRoutes } from '@/api/auth'
import rootRoutes from '@/router'
import { loadRoutes } from '@/utils/public'

const useRouteStore = create<RouteStore>((set) => ({
  routes: rootRoutes,
  menuRoutes: [],
  // addRoutes: (routes: RouteRecord[]) => set(() => ({ routes: [...rootRoutes, ...routes] })),
  // setMenus: (menus: MenuItemType[]) => set(() => ({ menus })),
  loadMenuRoutes: async () => {
    try {
      const { data } = await getMenuRoutes()
      const menuRoutes = loadRoutes(data)
      console.log('loadMenuRoutes')
      set(() => ({ routes: [...rootRoutes, ...menuRoutes], menuRoutes }))
      return true
    } catch (e) {
      return false
    }
  },
}))

export default useRouteStore
