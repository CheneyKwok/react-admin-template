import { ApiUrl } from '@/api'
import { LoginData, LoginParams } from '@/api/user/type.ts'
import { ApiResponseType } from '@/types'
import request from '@/utils/request.ts'

export const login: LoginData = async (data: LoginParams) => {
  return request.post<ApiResponseType>(ApiUrl.LOGIN, data)
}

export const userInfo = () => {
  return request.get(ApiUrl.USER_INFO)
}
