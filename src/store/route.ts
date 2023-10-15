import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { getMenuRoutes } from '@/api/auth'
import routes, { createRoutes } from '@/router'

const useRouteStore = create<RouteStore>()(
  devtools(
    (set) => ({
      routes: routes,
      menuRoutes: [],
      loadMenuRoutes: async () => {
        const { data } = await getMenuRoutes()
        const { routes, menuRoutes } = createRoutes(data)
        set(() => ({ routes, menuRoutes }))
      },
    }),
    { name: 'RouteStore' }
  )
)

export default useRouteStore
