import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style : inside;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        /* font-family: 'Pretendard'!important; */
    }
`;