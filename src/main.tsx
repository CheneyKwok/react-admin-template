import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'

import App from '@/App.tsx'
import Home from '@/pages/home'

import 'virtual:svg-icons-register'
import '@/styles/index.scss'





ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ConfigProvider locale={zhCN}>
      <Router>
        <App />
        <Home />
      </Router>
    </ConfigProvider>
  </>
)