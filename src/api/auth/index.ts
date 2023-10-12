import request from '@/utils/axios/request.ts'

export const getAuthRoutes = () => {
  return request.get<Api.AuthRoute[]>('/auth/routes')
}
