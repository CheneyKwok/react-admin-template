import { MockMethod } from 'vite-plugin-mock'

const createRoutes = (): Api.MenuRoute[] => [
  {
    path: 'menu',
    meta: {
      title: 'Menu',
      auth: true,
    },
    component: '/src/pages/menu/index.tsx',
    children: [
      {
        path: 'submenu',
        meta: {
          title: 'SubMenu',
          auth: true,
        },
        component: '/src/pages/menu/submenu/index.tsx',
      },
    ],
  },
]

export default [
  {
    url: '/api/auth/menuRoutes',
    method: 'get',
    response: () => {
      const routes = createRoutes()
      return { code: 200, data: routes }
    },
  },
] as MockMethod[]
