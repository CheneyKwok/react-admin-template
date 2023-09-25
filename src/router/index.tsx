import { lazy } from 'react'

import lazyLoad from '@/router/Suspense'
import { RouteType } from '@/types'

const Layout = lazy(() => import('@/components/layout'))
const Login = lazy(() => import('@/pages/login'))
const Exception404 = lazy(() => import('@/pages/exception/404'))
const Home = lazy(() => import('@/pages/home'))
const Menu = lazy(() => import('@/pages/menu'))
const SubMenu = lazy(() => import('@/pages/menu/submenu'))

const rootRoutes: RouteType[] = [
  {
    path: '/404',
    element: lazyLoad(Exception404),
  },
  {
    path: '/login',
    element: lazyLoad(Login),
  },
  // {
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: '/home',
  //       meta: {
  //         key: '/home',
  //         label: 'Home',
  //       },
  //       element: <Home />,
  //     },
  //     {
  //       path: '/menu',
  //       meta: {
  //         key: '/menu',
  //         label: 'Menu',
  //       },
  //       element: <Menu />,
  //       children: [
  //         {
  //           path: 'submenu',
  //           meta: {
  //             key: '/submenu',
  //             label: 'SubMenu',
  //           },
  //           element: <SubMenu />,
  //         },
  //       ],
  //     },
  //   ],
  // },
]
export default rootRoutes