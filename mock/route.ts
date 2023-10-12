import { MockMethod } from 'vite-plugin-mock'

const createRoutes = (): Api.AuthRoute[] => [
  {
    element: '/src/components/layout/index.tsx',
    children: [
      {
        path: '/home',
        index: true,
        meta: {
          key: '/home',
          label: 'Home',
          auth: true,
        },
        element: '/src/pages/home/index.tsx',
      },
      {
        path: '/menu',
        meta: {
          key: '/menu',
          label: 'Menu',
          auth: true,
        },
        element: '/src/pages/menu/index.tsx',
        children: [
          {
            path: 'submenu',
            meta: {
              key: '/menu/submenu',
              label: 'SubMenu',
              auth: true,
            },
            element: '/src/pages/menu/submenu/index.tsx',
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
