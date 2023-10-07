import { MockMethod } from 'vite-plugin-mock'

import { AuthRoute } from '@/types/api'

const createRoutes = (): AuthRoute[] => [
  {
    element: '/src/components/layout',
    children: [
      {
        path: '/home',
        index: true,
        meta: {
          key: '/home',
          label: 'Home',
          auth: true,
        },
        element: '/src/pages/home',
      },
      {
        path: '/menu',
        meta: {
          key: '/menu',
          label: 'Menu',
          auth: true,
        },
        element: '/src/pages/menu',
        children: [
          {
            path: 'submenu',
            meta: {
              key: '/menu/submenu',
              label: 'SubMenu',
              auth: true,
            },
            element: '/src/pages/menu/submenu',
          },
        ],
      },
    ],
  },
]

export default [
  {
    url: '/api/auth/routes',
    method: 'get',
    response: () => {
      const routes = createRoutes()
      return { code: 200, data: routes }
    },
  },
] as MockMethod[]