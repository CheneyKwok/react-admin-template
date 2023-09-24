import React from 'react'
import { useRoutes } from 'react-router-dom'

import rootRoutes from '@/router'

const App: React.FC = () => {
  const element = useRoutes(rootRoutes as any)
  return <>{element}</>
}

export default App
