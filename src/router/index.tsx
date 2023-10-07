import { lazy } from 'react'

import lazyLoad from '@/router/Suspense'
import { RouteObject } from '@/types'
import { AuthRoute } from '@/types/api'


const Login = lazy(() => import('@/pages/login'))
const Exception404 = lazy(() => import('@/pages/exception/404'))

const rootRoutes: RouteObject[] = [
  {
    path: '/login',
    element: lazyLoad(Login),
    meta: {
      auth: false,
    },
  },
  {
    path: '/*',
    element: lazyLoad(Exception404),
    meta: {
      auth: false,
    },
  },
]

export const loadRoutes = (routes: AuthRoute[]) => {
  const loadedRoutes: RouteObject[] = []
  routes.forEach((route: AuthRoute) => {
    const { path, index,  element, meta, children } = route
    const loadedRoute: RouteObject = {
      element: lazyLoad(lazy(() => import(element))),
    }
    if (path) loadedRoute.path = path
    if (index) loadedRoute.index = index
    if (meta) loadedRoute.meta = meta
    if (children) loadedRoute.children = loadRoutes(children)
    loadedRoutes.push(loadedRoute)
  })
  return loadedRoutes
}

export default rootRoutes