import request from '@/utils/axios/request.ts'

export const getMenuRoutes = () => {
  return request.get<Api.MenuRoute[]>('/auth/menuRoutes')
}
