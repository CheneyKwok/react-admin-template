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
// const AuthRouter: FC = () => {
//   const [routes, setRoutes] = useState(rootRoutes)
//   const { pathname } = useLocation()
//   const navigate = useNavigate()
//
//   useEffect(() => {
//     if (pathname === '/') navigate('/home')
//   }, [pathname, navigate])
//
//   useEffect(() => {
//     getAuthRoutes().then(({ data }: { data: AuthRouteResult }) => {
//       if (data.routes) {
//         // 加载路由
//         data.routes.map((route) => {
//           route.element
//         })
//         const newRoutes = [...routes, ...data.routes]
//         console.log('newRoutes', newRoutes)
//         setRoutes(newRoutes)
//       }
//     })
//   }, [])
//
//   const element = useRoutes(routes)
//   console.log('element', element)
//
//   return element
// }

export default AuthRouter