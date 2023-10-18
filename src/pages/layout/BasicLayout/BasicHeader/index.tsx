import { Layout } from 'antd'

import './index.scss'

const BasicHeader = () => {
  return (
    <Layout.Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: '#fff',
      }}
    >
      <div className="logo">React Admin Template</div>
    </Layout.Header>
  )
}
export default BasicHeader
