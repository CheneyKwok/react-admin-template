import { MenuItemType } from 'antd/es/menu/hooks/useItems'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import rootRoutes from '@/router'
import { RouteObject } from '@/types'


export interface UserState {}

interface UserStoreTYpe {
  menus: MenuItemType[]
  routes: RouteObject[]
  addRoutes: (routes: RouteObject[]) => void
  setMenus: (menus: MenuItemType[]) => void
}

const useUserStore = create<UserStoreTYpe>()(
  devtools((set) => ({
    menus: [],
    routes: rootRoutes,
    addRoutes: (routes: RouteObject[]) => set(() => ({ routes: [...rootRoutes, ...routes] })),
    setMenus: (menus: MenuItemType[]) => set(() => ({ menus })),
  }))
)
export default useUserStore