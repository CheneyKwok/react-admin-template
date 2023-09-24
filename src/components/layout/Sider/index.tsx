import { Layout, theme } from 'antd'

import Nav from '@/components/layout/Sider/Nav'

const Sider = () => {
  const { token } = theme.useToken()
  return (
    <Layout.Sider width={200} style={{ background: token.colorBgContainer }}>
      <Nav />
    </Layout.Sider>
  )
}

export default Sider
