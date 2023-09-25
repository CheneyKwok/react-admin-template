import './index.scss'

import LoginBg from '@/assets/images/login_bg.svg'

const Login = () => (
  <div className="login-container">
    <img className="login-bg" src={LoginBg} alt="background" />
    <div className="login-box"></div>
  </div>
)

export default Login
