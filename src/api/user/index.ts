import { ApiUrl } from '@/api'
import { LoginData, LoginParams } from '@/api/user/type.ts'
import request from '@/utils/axios/request.ts'

export const login = (data: LoginParams) => {
  return request.post<LoginData>(ApiUrl.LOGIN, data)
}

export const userInfo = () => {
  return request.get(ApiUrl.USER_INFO)
}