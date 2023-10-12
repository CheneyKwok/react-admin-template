import { ApiUrl } from '@/api'
import request from '@/utils/axios/request.ts'

export const login = (data: Api.LoginParams) => {
  return request.post<Api.LoginRes>(ApiUrl.LOGIN, data)
}

export const userInfo = () => {
  return request.get(ApiUrl.USER_INFO)
}
