import { Breadcrumb, Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'

import BasicTab from '@/components/layout/BasicLayout/BasicContent/BasicTab'

const BasicContent = () => {
  const { token } = theme.useToken()
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout.Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: token.colorBgContainer,
        }}
      >
        <BasicTab />
        <Outlet></Outlet>
      </Layout.Content>
    </Layout>
  )
}

export default BasicContent
