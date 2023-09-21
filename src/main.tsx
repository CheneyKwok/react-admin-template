import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </React.StrictMode>
)
