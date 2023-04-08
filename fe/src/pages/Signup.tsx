import * as style from '../styles/Signup'

const Signup = () => {
  return(
    <style.SignupContainer>
      <div>
        <input placeholder='아이디를 입력해주세요.' data-testid="email-input" />
        <input placeholder='비밀번호를 입력해주세요.' data-testid="password-input" />
        <button data-testid="signup-button">회원가입</button>
      </div>
    </style.SignupContainer>
  )
}

export default Signup;