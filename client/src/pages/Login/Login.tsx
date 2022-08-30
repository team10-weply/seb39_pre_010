import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/images/Logo.svg';
import SocialLoginButton from 'components/SocialLoginButton/SocialLoginButton';

interface ILoginInfo {
  email: string;
  password: string;
}

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<ILoginInfo | null>(null);

  return (
    <Container>
      <LoginContainer>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <SocialLoginContainer>
          <SocialLoginButton mode="google">
            Log in with Google
          </SocialLoginButton>
          <SocialLoginButton mode="github">
            Log in with GitHub
          </SocialLoginButton>
          <SocialLoginButton mode="facebook">
            Log in with Facebook
          </SocialLoginButton>
        </SocialLoginContainer>
        <LoginFormContainer>
          <LoginFormInnerContainer>
            <LoginContent>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </LoginContent>
            <LoginContent>
              <div>
                <label htmlFor="password">Password</label>
                <a>Forgot password?</a>
              </div>
              <input type="password" id="password" />
            </LoginContent>
            <LoginContent>
              <button>Log in</button>
            </LoginContent>
          </LoginFormInnerContainer>
        </LoginFormContainer>
        <SignupContainer>
          <div>
            Don’t have an account? <a>Sign up</a>
          </div>
          <div>
            Are you an employer? <a>Sign up on Talent</a>
          </div>
        </SignupContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: hsl(210, 8%, 95%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 316px;
  height: 570px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;

  & img {
    width: 32px;
    height: 37px;
  }
`;

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

const LoginFormContainer = styled.div`
  height: 234px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px,
    rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  margin-bottom: 24px;
`;

const LoginFormInnerContainer = styled.div`
  /* border: 1px solid gray; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const LoginContent = styled.div`
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-weight: bold;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & label {
    padding: 2px;
  }

  & a {
    font-size: 12px;
    font-weight: normal;
    color: hsl(206, 100%, 40%);
    cursor: pointer;
  }

  & input {
    width: 100%;
    height: 32px;
    box-sizing: border-box;
    padding: 7.8px 9.1px;
    margin-top: 2px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
  }

  & button {
    border: 1px solid rgb(214, 217, 220);
    width: 100%;
    margin: 0;
    border-radius: 0.25rem;
    height: 37.78px;
    background-color: hsl(206, 100%, 52%);
    color: white;
    cursor: pointer;
  }
`;

const SignupContainer = styled.div`
  height: 78px;
  width: 316px;
  box-sizing: border-box;
  padding: 16px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & div {
    text-align: center;
  }

  & a {
    color: hsl(206, 100%, 40%);
  }
`;
