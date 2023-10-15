import * as React from 'react'
import { Tabs } from 'antd'

import useTabContext from '@/hooks/useTabContext.ts'

const BasicTab = () => {
  const { tabs, activeKey, setActiveKey, removeTab } = useTabContext()

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey)
  }

  const onEdit = (
    targetKey: string | React.MouseEvent | React.KeyboardEvent,
    action: 'add' | 'remove'
  ) => {
    if (action === 'remove') {
      console.log('remove tab', targetKey)
      removeTab(targetKey as string, () => {})
    }
  }

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={tabs}
    />
  )
}

export default BasicTab
