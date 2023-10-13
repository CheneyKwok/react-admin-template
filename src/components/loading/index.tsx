import React from 'react'
import { Spin } from 'antd'

const Loading = () => {
  return (
    <Spin
      size="large"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    />
  )
}
export default Loading
