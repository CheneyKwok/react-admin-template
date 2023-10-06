import { useEffect } from 'react'
import { GlobalOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

import useUserStore from '@/store/user.ts'


const Nav = () => {
  const { menus } = useUserStore((state) => state)
  const navigate = useNavigate()

  // todo 从后台取菜单数据
  const menuItems = [
    { key: '/home', icon: <HomeOutlined />, label: 'Home' },
    { key: '/menu', icon: <GlobalOutlined />, label: 'Menu' },
    { key: '/menu/submenu', icon: <GlobalOutlined />, label: 'SubMenu' },
  ]

  useEffect(() => {
    console.log('render Nav')
  })
  const onSelect = ({ key }: { key: string }) => {
    console.log('key', key)
  }
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={menus}
        onSelect={onSelect}
      />
    </>
  )
}

export default Nav