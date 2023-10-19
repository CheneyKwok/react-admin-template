import { Layout, theme } from 'antd'

import BasicMenu from '@/pages/layout/BasicLayout/BasicSide/BasicMenu'

const BasicSide = () => {
  const { token } = theme.useToken()
  return (
    <Layout.Sider width={220} style={{ background: token.colorBgContainer, boxShadow: '2px 0 8px 0 rgba(29,35,41,.05)' }}>
      <BasicMenu />
    </Layout.Sider>
  )
}

export default BasicSide
