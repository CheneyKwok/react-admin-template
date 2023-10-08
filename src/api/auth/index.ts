import { AuthRoute } from '@/types/api'
import request from '@/utils/axios/request.ts'

export const getAuthRoutes = () => {
  return request.get<AuthRoute[]>('/auth/routes')
}