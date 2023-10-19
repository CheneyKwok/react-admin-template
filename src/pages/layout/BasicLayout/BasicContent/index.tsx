import { useMemo } from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'

import useRoute from '@/hooks/useRoute.ts'
import BasicTab from '@/pages/layout/BasicLayout/BasicContent/BasicTab'

const BasicContent = () => {
  const { matchedRoutes } = useRoute()
  const { token } = theme.useToken()

  const items = useMemo(() => {
    return matchedRoutes.map((route) => ({
      // title: <Link to={route.fullPath || ''}>{route.meta?.title}</Link>,
      title: route.meta?.title,
      key: route.fullPath,
    }))
  }, [matchedRoutes])

  return (
    <Layout style={{ padding: '0 0 24px', backgroundColor: '#fff', margin: 24 }}>
      <div>
        <Breadcrumb style={{ margin: '16px 0' }} items={items} />
        <BasicTab />
      </div>
      <Layout.Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          // background: token.colorBgContainer,
          backgroundColor: '#f0f2f5',
        }}
      >
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default BasicContent
