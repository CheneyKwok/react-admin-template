import { AuthRoute } from '@/api/auth/type.ts'
import request from '@/utils/axios/request.ts'

export const getAuthRoutes = () => {
  return request.get<AuthRoute[]>('/auth/routes')
}