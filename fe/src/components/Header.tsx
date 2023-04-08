import { Link, useNavigate } from "react-router-dom";
import * as style from '../styles/Header';

function Header() {
  const navigate = useNavigate();
  
  const clickLogOut = (e:any) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
    alert('로그아웃 성공!')
  };

  return (
    <>
      <style.HeaderContainer>
        <Link to="/">
          <style.Logo>
            <div>TODO</div>
          </style.Logo>
        </Link>
          {localStorage.getItem("Authorization") ? (
            <Link to="/">
              <style.Button onClick={clickLogOut}>로그아웃</style.Button>
            </Link>
          ) : (
            <div>
              <Link to="/signin">
                <style.Button>로그인</style.Button>
              </Link>
              <Link to="/signup">
                <style.Button>회원가입</style.Button>
              </Link>
            </div>
          )}
      </style.HeaderContainer>
    </>
  );
}

export default Header;

