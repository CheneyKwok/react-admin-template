import { useEffect } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

import AuthRouter from '@/router/AuthRouter'
import useRouteStore from '@/store/route.ts'

const App = () => {
  const routeStore = useRouteStore((state) => state)
  const element = useRoutes(routeStore.routes as RouteObject[])
  useEffect(() => {
    console.log('mount app=========================')
  }, [])
  return (
    <>
      <AuthRouter>{element}</AuthRouter>
    </>
  )
}

export default App
