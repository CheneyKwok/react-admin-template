


import './index.scss'

import LoginBg from '@/assets/images/login_bg.svg'
import LoginFom from '@/pages/login/LoginFom'


const Login = () => (
  <div className="login-container">
    <img className="login-bg" src={LoginBg} alt="background" />
    <div className="login-form">
      <div className="login-logo">React Admin</div>
      <LoginFom />
    </div>
  </div>
)

export default Login