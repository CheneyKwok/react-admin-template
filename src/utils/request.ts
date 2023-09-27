import { message } from 'antd'
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { ApiData, ApiResponseType } from '@/types'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) =>
    // 增强 config 配置对象
    config
)

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data as ApiResponseType
    // 响应成功增强
    if (data.code && data.code !== 200) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return response.data.data as ApiData
  },
  (error) => {
    // 响应失败增强
    console.log('error', error)
    let msg = ''
    const { status } = error.response as { status: number }
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '请求失败'
    }
    message.error(msg)
    return Promise.reject(error)
  }
)

export default request
