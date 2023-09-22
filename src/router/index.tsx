import { lazy } from 'react'

// const lazyLoad = (Component: any) => (
//   <Suspense>
//     <Component />
//   </Suspense>
// )

const Home = lazy(() => import('@/views/home'))
const Login = lazy(() => import('@/views/login'))
const rootRouters = [
  {
    path: '*',
    name: '首页',
    element: <Home />,
  },
  {
    path: '/login',
    name: '登录',
    element: <Login />,
  },
]

export default rootRouters
