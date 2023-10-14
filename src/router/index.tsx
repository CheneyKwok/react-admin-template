import { lazy, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import RouterGuard from '@/router/RouterGuard'
import lazyLoad from '@/router/Suspense'

const Login = lazy(() => import('@/pages/login'))
const Home = lazy(() => import('@/pages/home'))
const BasicLayout = lazy(() => import('@/components/layout/BasicLayout'))
const Exception403 = lazy(() => import('@/components/exception/Exception403'))
const Exception404 = lazy(() => import('@/components/exception/Exception404'))
const Exception500 = lazy(() => import('@/components/exception/Exception500'))

const constantRoutes: RouteRecord[] = [
  {
    path: '/',
    element: <Navigate to='/home' replace/>
  },
  {
    path: '/',
    element: lazyLoad(BasicLayout),
    children: [
      {
        path: 'home',
        index: true,
        meta: {
          title: 'Home',
          auth: true,
        },
        element: <RouterGuard>{lazyLoad(Home)}</RouterGuard>,
      },
    ],
  },
  {
    path: '/login',
    element: lazyLoad(Login),
    meta: {
      auth: false,
    },
  },
  {
    path: '/403',
    element: lazyLoad(Exception403),
    meta: {
      auth: false,
    },
  },
  {
    path: '/404',
    element: lazyLoad(Exception404),
    meta: {
      auth: false,
    },
  },
  {
    path: '/500',
    element: lazyLoad(Exception500),
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

const pageModules = import.meta.glob(['@/pages/*/*.tsx'])

export const routesRender = (routes: RouteRecord[]): RouteRecord[] => {
  return routes.map((route) => {
    const { redirect, component } = route
    let Element: ReactNode
    if (redirect) {
      Element = <Navigate to={redirect} replace />
    }
    if (component) {
      const PageComponent = pageModules[component]
      // @ts-ignore
      Element = lazyLoad(lazy(PageComponent))
      // element = lazyLoad(lazy(PageComponent))
    }
    return {
      path: route.path,
      element: Element,
      children: route.children?.length ? routesRender(route.children): undefined,
    }
  })
}

export default constantRoutes
