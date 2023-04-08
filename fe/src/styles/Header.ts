import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 129px;
  margin: 10px;
`;

export const Logo = styled.div`
  height: 64px;
  align-items: center;
  justify-content: center;
  div {
    color: #e38b29;
    font-size: 43px;
    text-decoration: none;
    &:hover {
      color: #285430;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  padding: 5px;
  white-space: nowrap;
  color: #E38B29;
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
    color: #285430;
  }
  &:focus {
    color: #285430;
  }
`;