import { MockMethod } from 'vite-plugin-mock'

const createRoutes = (): RouteConfig[] => [
  {
    path: 'menu',
    component: 'pages/menu',
    meta: {
      title: 'Menu',
      auth: true,
    },
    children: [
      {
        path: 'submenu',
        component: 'pages/menu/submenu',
        meta: {
          title: 'SubMenu',
          auth: true,
        },
      },
    ],
  },
]

export default [
  {
    url: '/api/auth/menuRoutes',
    method: 'get',
    timeout: 1000,
    response: () => {
      const routes = createRoutes()
      return { code: 200, data: routes }
    },
  },
] as MockMethod[]
