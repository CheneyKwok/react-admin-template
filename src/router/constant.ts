const constantRouteConfigs: RouteConfig[] = [
  {
    path: '/',
    component: 'pages/layout/BasicLayout',
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: 'pages/home',
        meta: {
          title: '首页',
          auth: true,
          icon: 'HomeOutlined',
        },
      },
    ],
  },
  {
    path: '/login',
    component: 'pages/login',
    meta: {
      auth: false,
    },
  },
  {
    path: '/403',
    component: 'pages/exception/403',
    meta: {
      auth: false,
    },
  },
  {
    path: '/404',
    component: 'pages/exception/404',
    meta: {
      auth: false,
    },
  },
  {
    path: '/500',
    component: 'pages/exception/500',
    meta: {
      auth: false,
    },
  },
  {
    path: '/*',
    redirect: '/404',
    meta: {
      auth: false,
    },
  },
]

export default constantRouteConfigs
