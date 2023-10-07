import { MenuItemType } from 'antd/es/menu/hooks/useItems'
import { create } from 'zustand'

import rootRoutes from '@/router'
import { RouteObject } from '@/types'

interface UserStoreTYpe {
  token: string
  menus: MenuItemType[]
  routes: RouteObject[]
  setToken: (token: string) => void
  addRoutes: (routes: RouteObject[]) => void
  setMenus: (menus: MenuItemType[]) => void
}

const useUserStore = create<UserStoreTYpe>((setState) => ({
  token: localStorage.getItem('token') as string,
  menus: [],
  routes: rootRoutes,
  setToken: (token) => localStorage.setItem('token', token),
  addRoutes: (routes: RouteObject[]) => setState(() => ({ routes: [...rootRoutes, ...routes] })),
  setMenus: (menus: MenuItemType[]) => setState(() => ({ menus })),
}))

export default useUserStore