import { create } from 'zustand'

import { getMenuRoutes } from '@/api/auth'
import constantRoutes from '@/router'
import { combineMenuRoutes, formatRoutes } from '@/router/helper.ts'

const useRouteStore = create<RouteStore>((set) => ({
  routes: constantRoutes, //todo 在这里render常量路由
  menuRoutes: [],
  loadMenuRoutes: async () => {
    console.log('loadMenuRoutes>>>>>>>>>>>>>>>>>>>>>>>>')
    const { data } = await getMenuRoutes()
    const menuRoutes = formatRoutes(data)
    set(() => ({ routes: combineMenuRoutes(menuRoutes), menuRoutes }))
  },
}))

export default useRouteStore
