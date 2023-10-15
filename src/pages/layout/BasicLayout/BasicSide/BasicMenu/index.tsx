import React, { useEffect } from 'react'
import * as Icons from '@ant-design/icons'
import { Menu } from 'antd'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'
import { useNavigate } from 'react-router-dom'

import useRouteStore from '@/store/route.ts'

// 动态渲染 Icon 图标
const customIcons: { [key: string]: any } = Icons

const formatMenus = (menuRoutes: RouteRecord[]): MenuItemType[] => {
  return menuRoutes.reduce((pre: MenuItemType[], cur) => {
    const { fullPath, meta, children } = cur
    if (meta) {
      const menu: MenuItemType = {
        key: fullPath || '',
        label: meta.title,
        icon: React.createElement(customIcons['HomeOutlined']),
      }
      pre.push(menu)
    }
    if (children && Array.isArray(children)) {
      pre = pre.concat(formatMenus(children))
    }
    return pre
  }, [])
}
const BasicMenu = () => {
  const { menuRoutes } = useRouteStore((state) => state)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('menuRoutes', formatMenus(menuRoutes))
  })
  const onSelect = ({ key }: { key: string }) => {
    console.log('menu select', key)
    navigate(key)
  }
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={formatMenus(menuRoutes)}
        onSelect={onSelect}
      />
    </>
  )
}

export default BasicMenu
