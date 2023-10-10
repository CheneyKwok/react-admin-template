import { useEffect } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

import useUserStore from '@/store/user'

const Nav = () => {
  const { menus } = useUserStore((state) => state)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('render Nav')
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
        items={menus}
        onSelect={onSelect}
      />
    </>
  )
}

export default Nav