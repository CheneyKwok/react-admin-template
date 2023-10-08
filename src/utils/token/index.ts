import Cookies from 'js-cookie'





const TokenKey = 'token'

export const getToken = (): string => Cookies.get(TokenKey) || ''

export const setToken = (token: string, rememberMe: boolean) => {
  if (rememberMe) Cookies.set(TokenKey, token, { expires: 1 })
  else Cookies.set(TokenKey, token)
}

export const removeToken = () => Cookies.remove(TokenKey)