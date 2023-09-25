import { MockMethod } from 'vite-plugin-mock'

const createRoutes = () => [
  {
    element: '@/components/layout',
    children: [
      {
        path: '/home',
        meta: {
          key: '/home',
          label: 'Home',
        },
        element: '@/pages/home',
      },
      {
        path: '/menu',
        meta: {
          key: '/menu',
          label: 'Menu',
        },
        element: '@/pages/menu',
        children: [
          {
            path: 'submenu',
            meta: {
              key: '/menu/submenu',
              label: 'SubMenu',
            },
            element: '@/pages/menu/submenu',
          },
        ],
      },
    ],
  },
  {
    path: '/404',
    element: '@/pages/exception/404',
  },
  {
    path: '/login',
    element: '@/pages/login',
  },
]

export default [
  {
    url: '/api/user/menu',
    method: 'get',
    response: () => {
      const routes = createRoutes()
      return { code: 200, data: { routes } }
    },
  },
] as MockMethod[]
