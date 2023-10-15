const constantRouteConfigs: RouteConfig[] = [
  {
    path: '/',
    component: 'pages/layout/BasicLayout',
    children: [
      {
        path: 'home',
        index: true,
        component: 'pages/home',
        meta: {
          title: 'Home',
          auth: true,
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
    component: 'pages/exception/Exception403',
    meta: {
      auth: false,
    },
  },
  {
    path: '/404',
    component: 'pages/exception/Exception404',
    meta: {
      auth: false,
    },
  },
  {
    path: '/500',
    component: 'pages/exception/Exception500',
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
