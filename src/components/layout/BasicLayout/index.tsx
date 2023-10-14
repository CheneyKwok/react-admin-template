import { Layout } from 'antd'

import BasicContent from '@/components/layout/BasicLayout/BasicContent'
import BasicHeader from '@/components/layout/BasicLayout/BasicHeader'
import BasicSide from '@/components/layout/BasicLayout/BasicSide'
import TabContextProvider from '@/components/provider/TabContextProvider'

const BasicLayout = () => (
  <Layout style={{ width: '100vw', height: '100vh' }}>
    <TabContextProvider>
      <BasicHeader />
      <Layout>
        <BasicSide />
        <BasicContent />
      </Layout>
    </TabContextProvider>
  </Layout>
)

export default BasicLayout
