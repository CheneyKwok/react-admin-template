import { useEffect } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

import useRouteStore from '@/store/route.ts'
import { formatMenus } from '@/utils/public'

const BasicMenu = () => {
  const { menuRoutes } = useRouteStore((state) => state)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('render Nav')
    console.log('menuRoutes', menuRoutes)
  })
  const onSelect = ({ key }: { key: string }) => {
    console.log('key', key)
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
