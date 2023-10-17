import { MockMethod } from 'vite-plugin-mock'

const createRoutes = (): RouteConfig[] => [
  {
    path: 'user',
    component: 'pages/user',
    meta: {
      title: '用户信息',
      auth: true,
      icon: 'UserOutlined'
    }
  },
  {
    path: 'menu',
    meta: {
      title: '多级菜单',
      auth: true,
      notPage: true,
      icon: 'MenuUnfoldOutlined',
    },
    children: [
      {
        path: 'menu1',
        // component: 'pages/menu/menu1',
        meta: {
          title: '一级菜单1',
          auth: true,
          notPage: true,
          icon: 'MenuOutlined',
        },
        children: [
          {
            path: 'menu1-1',
            component: 'pages/menu/menu1/menu1-1',
            meta: {
              title: '二级菜单1-1',
              auth: true,
              icon: 'MenuOutlined',
            },
          },
          {
            path: 'menu1-2',
            component: 'pages/menu/menu1/menu1-2',
            meta: {
              title: '二级菜单1-2',
              auth: true,
              icon: 'MenuOutlined',
            },
          },
        ]
      },
      {
        path: 'menu2',
        component: 'pages/menu/menu2',
        meta: {
          title: '一级菜单2',
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
