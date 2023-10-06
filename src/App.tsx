import { useRoutes } from 'react-router-dom'

import AuthRouter from '@/router/AuthRouter'
import useUserStore from '@/store/user.ts'


const App = () => {
  const routes = useUserStore((state) => state.routes)
  console.log('routes', routes)
  const element = useRoutes(routes)
  console.log('element', element)
  return <AuthRouter>{element}</AuthRouter>
}

export default App