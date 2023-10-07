import { MenuItemType } from 'antd/es/menu/hooks/useItems'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import rootRoutes from '@/router'
import { RouteObject } from '@/types'


export interface UserState {

}

interface UserStoreTYpe {
  token: string
  menus: MenuItemType[]
  routes: RouteObject[]
  setToken: (token: string) => void
  addRoutes: (routes: RouteObject[]) => void
  setMenus: (menus: MenuItemType[]) => void
}

const useUserStore = create<UserStoreTYpe>()(
  devtools(
    persist(
      (set) => ({
        token: '',
        menus: [],
        routes: rootRoutes,
        setToken: (token) => set(() => ({ token })),
        addRoutes: (routes: RouteObject[]) => set(() => ({ routes: [...rootRoutes, ...routes] })),
        setMenus: (menus: MenuItemType[]) => set(() => ({ menus })),
      }),
      { name: 'userStore'}
    )
  )
)
export default useUserStore