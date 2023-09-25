import { ApiUrl } from '@/api'
import { LoginParams } from '@/api/user/type.ts'
import request from '@/utils/request.ts'

export const login = (data: LoginParams) => {
  request.post<any>(ApiUrl.LOGIN, data)
}

export const userInfo = () => {
  request.get(ApiUrl.USER_INFO)
}