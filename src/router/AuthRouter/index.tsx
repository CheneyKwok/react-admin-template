import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ReactPropsType } from '@/types'

const AuthRouter = ({ children }: ReactPropsType) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (pathname === '/') navigate('/home')
  }, [pathname, navigate])

  return children
}

export default AuthRouter
