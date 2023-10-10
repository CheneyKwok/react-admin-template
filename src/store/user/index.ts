import { MenuItemType } from 'antd/es/menu/hooks/useItems'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import rootRoutes from '@/router'
import { RouteObject, UserStore } from '@/store/user/type.ts'

const useUserStore = create<UserStore>()(
  devtools((set) => ({
    menus: [],
    routes: rootRoutes,
    addRoutes: (routes: RouteObject[]) => set(() => ({ routes: [...rootRoutes, ...routes] })),
    setMenus: (menus: MenuItemType[]) => set(() => ({ menus })),
  }))
)
export default useUserStore