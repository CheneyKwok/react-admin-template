import { lazy } from 'react'

import { RouteType } from '@/types'

// const lazyLoad = (Component: any) => (
//   <Suspense>
//     <Component />
//   </Suspense>
// )

const Layout = lazy(() => import('@/components/layout'))
const Login = lazy(() => import('@/pages/login'))
const Exception404 = lazy(() => import('@/pages/exception/404'))
const Home = lazy(() => import('@/pages/home'))
const Menu = lazy(() => import('@/pages/menu'))
const SubMenu = lazy(() => import('@/pages/menu/submenu'))

const rootRoutes: RouteType[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        label: 'Home',
        element: <Home />,
      },
      {
        path: 'menu',
        label: 'Menu',
        element: <Menu />,
        children: [
          {
            path: 'submenu',
            label: 'SubMenu',
            element: <SubMenu />,
          },
        ],
      },
    ],
  },
  {
    path: '/404',
    element: <Exception404 />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]
export default rootRoutes
