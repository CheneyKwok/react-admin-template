import React from 'react'
import { Spin } from 'antd'

const Loading = () => {
  return (
    <Spin
      tip="Loading"
      size="large"
      style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
    >
      <div
        style={{
          padding: '50px',
        }}
      />
    </Spin>
  )
}
export default Loading
