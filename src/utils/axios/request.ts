import { message } from 'antd'
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

interface ResponseObject<T> {
  code: number
  msg: string
  data: T
}

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
  <T>(response: AxiosResponse<ResponseObject<T>>) => {
    const { data: responseObj } = response
    if (!responseObj) {
      return Promise.resolve(response)
    }
    const { code, msg } = responseObj
    // 响应码不为 200 时，全局错误拦截
    if (code && code !== 200) {
      message.error(msg)
      return Promise.reject(new Error(msg))
    }
    return responseObj as T
  },
  (error: AxiosError) => {
    // 请求超时单独判断，请求超时没有 response
    if (error.message.indexOf('timeout') !== -1) {
      message.error('请求超时，请稍后再试')
    }
    const { response } = error
    // 根据响应的错误状态码，做不同的处理
    if (response) {
      message.error(checkStatus(response.status))
    }
    // 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
    if (!window.navigator.onLine) {
      window.location.hash = '/500'
    }
    return Promise.reject(error)
  }
)

const checkStatus = (status: number): string => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求失败！请您稍后重试'
      break
    case 401:
      message = '登录失效！请您重新登录'
      break
    case 403:
      message = '当前账号无权限访问！'
      break
    case 404:
      message = '你所访问的资源不存在！'
      break
    case 405:
      message = '请求方式错误！请您稍后重试'
      break
    case 408:
      message = '请求超时！请您稍后重试'
      break
    case 500:
      message = '服务异常！'
      break
    case 502:
      message = '网关错误！'
      break
    case 503:
      message = '服务不可用！'
      break
    case 504:
      message = '网关超时！'
      break
    default:
      message = '请求失败！'
  }
  return message
}

export default request
