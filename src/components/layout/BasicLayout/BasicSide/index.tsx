import { Layout, theme } from 'antd'

import BasicMenu from '@/components/layout/BasicLayout/BasicSide/BasicMenu'

const BasicSide = () => {
  const { token } = theme.useToken()
  return (
    <Layout.Sider width={200} style={{ background: token.colorBgContainer }}>
      <BasicMenu />
    </Layout.Sider>
  )
}

export default BasicSide
