import { lazy } from 'react'

import lazyLoad from '@/router/Suspense'

const Login = lazy(() => import('@/pages/login'))
const Exception403 = lazy(() => import('@/components/exception/Exception403'))
const Exception404 = lazy(() => import('@/components/exception/Exception404'))
const Exception500 = lazy(() => import('@/components/exception/Exception500'))

const rootRoutes: RouteRecord[] = [
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

export default rootRoutes
