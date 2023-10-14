import { create } from 'zustand'

import { getMenuRoutes } from '@/api/auth'
import { combineMenuRoutes, formatRoutes } from '@/router/helper.ts'

const useRouteStore = create<RouteStore>((set) => ({
  routes: [],
  menuRoutes: [],
  loadMenuRoutes: async () => {
    console.log('loadMenuRoutes>>>>>>>>>>>>>>>>>>>>>>>>')
    const { data } = await getMenuRoutes()
    const menuRoutes = formatRoutes(data)
    set(() => ({ routes: combineMenuRoutes(menuRoutes), menuRoutes }))
  },
}))

export default useRouteStore
