import { useEffect, useRef } from 'react'
import { Tabs } from 'antd'
import { useLocation } from 'react-router-dom'

import useTabContext from '@/components/hooks/TabContext'
import { TabType } from '@/types'
import { getRouteByPathname } from '@/utils/public'

const Tab = () => {
  const { tabs, setTabs, activeKey, setActiveKey, removeTab } = useTabContext()
  const pathnameRef = useRef('')
  const { pathname } = useLocation()
  useEffect(() => {
    if (!pathname || pathnameRef.current === pathname) return
    pathnameRef.current = pathname

    console.log('pathname', pathname)
    console.log('tabs', tabs)

    const findTab = tabs.find((tab) => tab.key === pathname.split('/')[1])
    console.log('findTab', findTab)
    if (!!findTab) {
      setActiveKey(findTab.key)
      return
    }
    const { path, label, element } = getRouteByPathname(pathname)
    // const route = getRouteByPathname(pathname)
    const tab: TabType = {
      key: path,
      label,
      children: element,
    }
    setActiveKey(path)
    setTabs([...tabs, tab])
  }, [pathname])

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey)
  }

  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'remove' && typeof targetKey === 'string') {
      console.log('remove tab', targetKey)
      removeTab(targetKey, () => {})
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

export default Tab
