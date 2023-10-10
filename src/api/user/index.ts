import { ApiUrl } from '@/api'
import { LoginParams, LoginRes } from '@/api/user/type.ts'
import request from '@/utils/axios/request.ts'

export const login = (data: LoginParams) => {
  return request.post<LoginRes>(ApiUrl.LOGIN, data)
}

export const userInfo = () => {
  return request.get(ApiUrl.USER_INFO)
}