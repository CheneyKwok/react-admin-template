import { Layout } from 'antd'

import TabContextProvider from '@/components/provider/TabContextProvider'
import BasicContent from '@/pages/layout/BasicLayout/BasicContent'
import BasicHeader from '@/pages/layout/BasicLayout/BasicHeader'
import BasicSide from '@/pages/layout/BasicLayout/BasicSide'

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
