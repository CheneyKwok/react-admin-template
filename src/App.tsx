import { useRoutes } from 'react-router-dom'

import rootRoutes from '@/router'
import AuthRouter from '@/router/AuthRouter'

const App = () => {
  return <AuthRouter>{useRoutes(rootRoutes)}</AuthRouter>
}

export default App
