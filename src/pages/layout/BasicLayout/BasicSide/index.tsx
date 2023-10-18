import { Layout, theme } from 'antd'

import BasicMenu from '@/pages/layout/BasicLayout/BasicSide/BasicMenu'

const BasicSide = () => {
  const { token } = theme.useToken()
  return (
    <Layout.Sider width={220} style={{ background: token.colorBgContainer }}>
      <BasicMenu />
    </Layout.Sider>
  )
}

export default BasicSide
