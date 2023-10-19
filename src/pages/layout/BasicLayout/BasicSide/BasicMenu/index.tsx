import React, { useEffect, useState } from 'react'
import * as Icons from '@ant-design/icons'
import { Menu } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'

import useRoute from '@/hooks/useRoute.ts'
import useRouter from '@/hooks/useRouter.ts'
import useTabContext from '@/hooks/useTabContext.ts'
import useRouteStore from '@/store/route.ts'

// 动态渲染 Icon 图标
const customIcons: { [key: string]: any } = Icons

const formatMenus = (menuRoutes: RouteRecord[]): ItemType[] => {
  return menuRoutes
    .filter((menuRoute) => menuRoute.fullPath && menuRoute.meta)
    .map((menuRoute) => {
      const { fullPath, meta } = menuRoute
      return {
        key: fullPath,
        label: meta?.title,
        icon: meta?.icon ? React.createElement(customIcons[meta?.icon]) : undefined,
        children: menuRoute.children ? formatMenus(menuRoute.children) : undefined,
      } as ItemType
    })
}

const BasicMenu = () => {
  const { menuRoutes } = useRouteStore((state) => state)
  const { path, matchedRoute } = useRoute()
  const router = useRouter()
  const [selectKeys, setSelectKeys] = useState<string[]>()
  const { addTab, setActiveKey } = useTabContext()
  useEffect(() => {
    setSelectKeys([path])
    //Tab
    setActiveKey(path)
    if (matchedRoute) {
      console.log('matchedRoute', matchedRoute)
      const tab: TabType = {
        key: matchedRoute.fullPath || '',
        label: matchedRoute.meta?.title || '',
      }
      addTab(tab)
    }
  }, [path])

  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={selectKeys}
        selectedKeys={selectKeys}
        style={{ height: '100%', borderRight: 0 }}
        items={formatMenus(menuRoutes)}
        onClick={({ key }) => router.push(key)}
      />
    </>
  )
}

export default BasicMenu
