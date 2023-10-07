import { Navigate, useLocation } from 'react-router-dom'

import useUserStore from '@/store/user.ts'
import { ReactProps } from '@/types'
import { searchRoute } from '@/utils/public'

const AuthRouter = ({ children }: ReactProps) => {
  const { pathname } = useLocation()
  const { token, routes } = useUserStore((state) => state)
  console.log('store routes', routes)
  const route = searchRoute(pathname, routes)
  console.log('auth route', route)
  // 判断当前路由是否需要访问权限
  if (route && route.meta && !route.meta.auth) {
    console.log('无需 auth，path', pathname)
    return children
  }
  // 判断是否有Token、用户路由是否为空
  console.log('auth token', token)
  if (!token || Object.keys(route).length === 0) {
    console.log('去登陆, path', pathname)
    return <Navigate to="/login" replace />
  }

  return children
}

export default AuthRouter