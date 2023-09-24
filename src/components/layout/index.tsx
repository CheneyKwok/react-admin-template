import { Layout } from 'antd'

import Content from '@/components/layout/Content'
import Header from '@/components/layout/Header'
import Sider from '@/components/layout/Sider'
import TabContextProvider from '@/components/provider/TabContextProvider'

const BaseLayout = () => (
  <Layout style={{ width: '100vw', height: '100vh' }}>
    <TabContextProvider>
      <Header />
      <Layout>
        <Sider />
        <Content />
      </Layout>
    </TabContextProvider>
  </Layout>
)

export default BaseLayout
