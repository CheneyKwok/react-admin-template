import React, { useCallback } from 'react'
import { HomeOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { getAuthRoutes } from '@/api/auth'
import { login } from '@/api/user'
import { LoginData, LoginParams } from '@/api/user/type.ts'
import { loadRoutes } from '@/router'
import useUserStore from '@/store/user.ts'
import { AuthRoute } from '@/types/api'


const formatMenus = (authRoutes: AuthRoute[]): any[] => {
  return authRoutes.reduce((pre: any[], cur) => {
    const { meta, index, children } = cur
    if (meta) {
      const menu = {
        key: meta.key,
        index: String(index) || String(false),
        icon: <HomeOutlined />,
        label: meta.label,
      }
      pre.push(menu)
    }
    if (children && Array.isArray(children)) {
      pre = pre.concat(formatMenus(children))
    }
    return pre
  }, [])
}
const LoginForm: React.FC = () => {
  const navigate: NavigateFunction = useNavigate()
  const { setToken, addRoutes, setMenus } = useUserStore((state) => state)

  const handleSubmit = useCallback(
    async (loginParams: LoginParams) => {
      const { username, password } = loginParams
      const { data: loginRes }: { data: LoginData } = await login({ username, password })
      setToken(loginRes.token)
      const { data: authRoutes }: { data: AuthRoute[] } = await getAuthRoutes()
      if (authRoutes) {
        // 用户路由
        addRoutes(loadRoutes(authRoutes))
        // 用户菜单
        setMenus(formatMenus(authRoutes) as [])
      }
      navigate('/home')
    },
    [addRoutes, navigate, setMenus, setToken]
  )

  return (
    <Form
      name="loginForm"
      initialValues={{ remember: false }}
      onFinish={(loginParams: LoginParams) => handleSubmit(loginParams)}
    >
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={{ fontSize: '13px' }}>自动登录</Checkbox>
        </Form.Item>
        <Form.Item noStyle>
          <a className="login-form-forgot" href="">
            忘记密码 ？
          </a>
        </Form.Item>
      </Form.Item>
      <Form.Item style={{ marginBottom: '0px' }}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm