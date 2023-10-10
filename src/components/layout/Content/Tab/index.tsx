import * as React from 'react'
import { useEffect, useRef } from 'react'
import { Tabs } from 'antd'
import { useLocation } from 'react-router-dom'

import useTabContext from '@/components/hooks/TabContext'
import useUserStore from '@/store/user'

const Tab = () => {
  const { menus } = useUserStore((state) => state)
  const { tabs, setTabs, activeKey, setActiveKey, removeTab } = useTabContext()
  const pathnameRef = useRef('')
  const { pathname } = useLocation()

  useEffect(() => {
    console.log('render Tab')
  })
  //
  // useEffect(() => {
  //   const indexMenu = menus.find((menu) => menu.index)
  //   const tab = {
  //     key: indexMenu.key,
  //     label: indexMenu.label,
  //   }
  //   setTabs([tab])
  // }, [])
  // useEffect(() => {
  //   if (!pathname || pathnameRef.current === pathname) return
  //   pathnameRef.current = pathname
  //
  //   console.log('pathname', pathname)
  //   console.log('tabs', tabs)
  //
  //   const findTab = tabs.find((tab) => tab.key === pathname)
  //   console.log('findTab', findTab)
  //   if (findTab) {
  //     setActiveKey(findTab.key)
  //     return
  //   }
  //   const { path, meta, element }: RouteType = getRouteByPathname(pathname)
  //   // const route = getRouteByPathname(pathname)
  //   const { label } = meta as RouteMetaType
  //   const tab: TabType = {
  //     key: path as string,
  //     label: label,
  //     children: element,
  //   }
  //   setActiveKey(path as string)
  //   setTabs([...tabs, tab])
  // }, [pathname, setActiveKey, setTabs, tabs])

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

export default Tab