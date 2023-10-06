import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

import lazyLoad from '@/router/Suspense'
import { AuthRoute } from '@/types/api'


const Layout = lazy(() => import('@/components/layout'))
const Login = lazy(() => import('@/pages/login'))
const Exception404 = lazy(() => import('@/pages/exception/404'))
const Home = lazy(() => import('@/pages/home'))
const Menu = lazy(() => import('@/pages/menu'))
const SubMenu = lazy(() => import('@/pages/menu/submenu'))

const rootRoutes: RouteObject[] = [
  {
    path: '/*',
    element: lazyLoad(Exception404),
  },
  {
    path: '/login',
    element: lazyLoad(Login),
  },
]

export const loadRoutes = (routes: AuthRoute[]) => {
  const loadedRoutes: RouteObject[] = []
  routes.forEach((route: AuthRoute) => {
    const { path, element, children } = route
    const loadedRoute: RouteObject = {
      element: lazyLoad(lazy(() => import(element))),
    }
    if (path) {
      loadedRoute.path = path
    }
    if (children) {
      loadedRoute.children = loadRoutes(children)
    }
    loadedRoutes.push(loadedRoute)
  })
  return loadedRoutes
}
export default rootRoutes