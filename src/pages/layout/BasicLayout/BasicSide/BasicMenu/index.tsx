import React, { useEffect, useState } from 'react'
import * as Icons from '@ant-design/icons'
import { Menu } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { useLocation, useNavigate } from 'react-router-dom'

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
        icon: React.createElement(customIcons[meta?.icon || '']),
        children: menuRoute.children ? formatMenus(menuRoute.children) : undefined,
      } as ItemType
    })
}

const BasicMenu = () => {
  const { menuRoutes } = useRouteStore((state) => state)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [selectKeys, setSelectKeys] = useState<string[]>()

  useEffect(() => {
    console.log('menuRoutes', formatMenus(menuRoutes))
  }, [])

  useEffect(() => {
    setSelectKeys([pathname])
  }, [pathname])

  const onSelect = ({ key }: { key: string }) => {
    console.log('menu select', key)
    navigate(key)
  }

  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={selectKeys}
        selectedKeys={selectKeys}
        style={{ height: '100%', borderRight: 0 }}
        items={formatMenus(menuRoutes)}
        onSelect={onSelect}
      />
    </>
  )
}

export default BasicMenu
