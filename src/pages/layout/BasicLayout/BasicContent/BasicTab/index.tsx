import * as React from 'react'
import { Tabs } from 'antd'

import useTabContext from '@/hooks/useTabContext.ts'
import useRouter from "@/hooks/useRouter.ts";

const BasicTab = () => {
  const { tabs, activeKey, setActiveKey, removeTab } = useTabContext()
  const router = useRouter()

  const onChange = (key: string) => {
    setActiveKey(key)
    router.push(key)
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
        hideAdd
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={tabs}
    />
  )
}

export default BasicTab
