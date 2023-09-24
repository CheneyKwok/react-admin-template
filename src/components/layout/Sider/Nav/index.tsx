import { GlobalOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()

  // todo 从后台取菜单数据
  const menuItems = [
    { key: '/home', icon: <HomeOutlined />, label: 'Home' },
    { key: '/menu', icon: <GlobalOutlined />, label: 'Menu' },
    { key: '/menu/submenu', icon: <GlobalOutlined />, label: 'SubMenu' },
  ]
  const onSelect = ({ key }: { key: string }) => {
    console.log(key)
    navigate(key)
  }
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={menuItems}
        onSelect={onSelect}
      />
    </>
  )
}

export default Nav
