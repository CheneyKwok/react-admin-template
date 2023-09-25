import request from '@/utils/request.ts'

export const getAuthRoutes = () => {
  return request.get('/auth/auth_routes')
}
