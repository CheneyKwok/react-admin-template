import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import useUserStore from '@/store/user.ts'
import { ReactProps } from '@/types'
import { searchRoute } from '@/utils/public'


const AuthRouter = ({ children }: ReactProps): ReactNode => {
  const { pathname } = useLocation()
  const { token, routes } = useUserStore((state) => state)
  const route = searchRoute(pathname, routes)
  // 判断当前路由是否需要访问权限
  if (route && route.meta && !route.meta.auth) {
    console.log('无需 auth，path', pathname)
    return children
  }
  // 判断是否有Token、用户路由是否为空
  console.log('auth token', token)
  if (!token) {
    console.log('去登陆, path', pathname)
    return <Navigate to="/login" replace />
  }

  return children
}

export default AuthRouter