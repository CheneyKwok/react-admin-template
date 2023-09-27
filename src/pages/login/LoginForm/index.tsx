import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { login } from '@/api/user'
import { LoginParams } from '@/api/user/type.ts'
import useUserStore from '@/store/user.ts'

const LoginForm: React.FC = () => {
  const navigate: NavigateFunction = useNavigate()
  const setToken = useUserStore((state) => state.setToken)
  const onFinish = async (values: object) => {
    console.log('Received values of form: ', values)
    const { username, password }: LoginParams = values
    try {
      const data = await login({ username, password })
      setToken(data.token as string)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form name="loginForm" initialValues={{ remember: false }} onFinish={onFinish}>
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
