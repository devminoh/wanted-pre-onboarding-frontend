import * as style from '../styles/Login'

const Login = () => {
  return(
    <style.LoginContainer>
      <div>
        <input placeholder='아이디를 입력해주세요.' data-testid="email-input" />
        <input placeholder='비밀번호를 입력해주세요.' data-testid="password-input" />
        <button data-testid="signup-button">로그인</button>
      </div>
    </style.LoginContainer>
  )
}

export default Login;