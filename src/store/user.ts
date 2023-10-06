import { RouteObject } from 'react-router-dom'
import { create } from 'zustand'

import rootRoutes from '@/router'

interface UserStoreTYpe {
  token: string
  menus: []
  routes: RouteObject[]
  setToken: (token: string) => void
  addRoutes: (routes: RouteObject[]) => void
  setMenus: (menus: []) => void
}

const useUserStore = create<UserStoreTYpe>((setState) => ({
  token: localStorage.getItem('token') as string,
  menus: [],
  routes: rootRoutes,
  setToken: (token) => localStorage.setItem('token', token),
  addRoutes: (routes: RouteObject[]) => setState(() => ({ routes: [...rootRoutes, ...routes] })),
  setMenus: (menus: []) => setState(() => ({ menus })),
}))

export default useUserStore