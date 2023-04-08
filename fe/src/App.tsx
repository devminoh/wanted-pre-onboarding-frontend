import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global-style";
import * as style from "./styles/App";
import LoadingIcon from "./components/LoadingIcon";

const Main = lazy(() => import("./pages/Main"));
const Header = lazy(() => import('./components/Header'))
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingIcon></LoadingIcon>}>
        <GlobalStyle />
        <style.MainContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </style.MainContainer>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
