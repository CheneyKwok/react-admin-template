import { MockMethod } from 'vite-plugin-mock'

const createRoutes = (): RouteConfig[] => [
  {
    path: 'menu',
    component: 'pages/menu',
    meta: {
      title: 'Menu',
      auth: true,
      icon: 'MenuUnfoldOutlined',
    },
    children: [
      {
        path: 'submenu',
        component: 'pages/menu/submenu',
        meta: {
          title: 'SubMenu',
          auth: true,
          icon: 'MenuOutlined',
        },
      },
    ],
  },
]

export default [
  {
    url: '/api/auth/menuRoutes',
    method: 'get',
    timeout: 500,
    response: () => {
      const routes = createRoutes()
      return { code: 200, data: routes }
    },
  },
] as MockMethod[]
