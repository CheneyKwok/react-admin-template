import { AuthRoute } from '@/types/api'
import request from '@/utils/request.ts'

export const getAuthRoutes = () => {
  return request.get<AuthRoute[]>('/auth/routes')
}