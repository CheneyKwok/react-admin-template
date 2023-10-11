import { ReactNode } from 'react'
import { useRequest } from 'ahooks'
import { Navigate, RouteObject, useLocation, useRoutes } from 'react-router-dom'

import { getAuthRoutes } from '@/api/auth'
import rootRoutes from '@/router'
import useUserStore from '@/store/user'
import { formatMenus, loadRoutes, searchIndexRoute, searchRoute } from '@/utils/public'
import { getToken } from '@/utils/token'

const AuthRouter = (): ReactNode => {
  const { pathname } = useLocation()
  const { routes, addRoutes, setMenus } = useUserStore((state) => state)
  // 路由的组件
  const element = useRoutes(routes as RouteObject[])
  const { run: runLoadAuthRoutes } = useRequest(getAuthRoutes, {
    manual: true,
    onSuccess: ({ data: authRoutes }) => {
      if (authRoutes) {
        console.log('request ....')
        // 用户路由
        addRoutes(loadRoutes(authRoutes))
        // 用户菜单
        setMenus(formatMenus(authRoutes))
      } else {
        return <Navigate to="/403" replace />
      }
    },
  })
  console.log('>>>>>>>>>routes', routes)
  // 当只有根路由时，加载用户权限路由
  if (routes === rootRoutes) {
    runLoadAuthRoutes()
    // 加载用户权限路由
    // getAuthRoutes().then(({ data: authRoutes }) => {
    //   if (authRoutes) {
    //     // 用户路由
    //     addRoutes(loadRoutes(authRoutes))
    //     // 用户菜单
    //     setMenus(formatMenus(authRoutes))
    //   } else {
    //     return <Navigate to="/403" replace />
    //   }
    // })
  }

  // '/'的path路由到首页
  if (pathname === '/') {
    const indexRoute = searchIndexRoute(routes)
    if (indexRoute?.path) return <Navigate to={indexRoute.path} />
  }
  // 当前路由信息
  const route = searchRoute(pathname, routes)
  // 判断当前路由是否需要访问权限
  if (route && route.meta && !route.meta.auth) {
    return element
  }
  // 判断是否有Token、用户路由是否为空
  if (!getToken()) {
    return <Navigate to="/login" replace />
  }
  return element
}

export default AuthRouter