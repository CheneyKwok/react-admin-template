import { useRoutes } from 'react-router-dom'

import AuthRouter from '@/router/AuthRouter'
import useUserStore from '@/store/user.ts'


const App = () => {
  const routes = useUserStore((state) => state.routes)
  const element = useRoutes(routes)
  return (
    <div>
      <AuthRouter>{element}</AuthRouter>
    </div>
  )
}

export default App