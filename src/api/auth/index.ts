import request from '@/utils/axios/request.ts'

export const getMenuRoutes = () => {
  return request.get<RouteConfig[]>('/auth/menuRoutes')
}
