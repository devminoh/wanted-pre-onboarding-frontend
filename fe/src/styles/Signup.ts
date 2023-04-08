import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 129px;
  div {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    input {
      border: 1px solid #e38b29;
      border-radius: 5px;
      margin-bottom: 10px;
      font-size: 2rem;
      padding: 5px;
    }
    button {
      border: 1px solid #e38b29;
      border-radius: 5px;
      background-color: #e38b29;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      padding: 5px;
      &:hover {
        border: 1px solid #285430;
        background-color: #285430;
      }
    }
  }
`;
