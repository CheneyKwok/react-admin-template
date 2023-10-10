import { lazy } from 'react'

import lazyLoad from '@/router/Suspense'
import { RouteObject } from '@/store/user/type.ts'

const Login = lazy(() => import('@/pages/login'))
const Exception403 = lazy(() => import('@/components/exception/Exception403'))
const Exception404 = lazy(() => import('@/components/exception/Exception404'))

const rootRoutes: RouteObject[] = [
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
    path: '/*',
    element: lazyLoad(Exception404),
    meta: {
      auth: false,
    },
  },
]

export default rootRoutes