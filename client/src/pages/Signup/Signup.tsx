import React, { useState } from 'react';
import styled from 'styled-components';
import SocialLoginButton from 'components/SocialLoginButton/SocialLoginButton';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Chat } from 'assets/images/SignupImages/Chat.svg';
import { ReactComponent as UpDownArrow } from 'assets/images/SignupImages/UpDownArrow.svg';
import { ReactComponent as Tag } from 'assets/images/SignupImages/Tag.svg';
import { ReactComponent as Badge } from 'assets/images/SignupImages/Badge.svg';
import { client } from 'api';
import BasicButton from 'components/Button/BasicButton';

export interface ISignupForm {
  nickname: string;
  email: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState<ISignupForm>({
    nickname: '',
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignupInfo({
      ...signupInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await client.post('/api/v1/users/signup', signupInfo);
      navigate('/login');

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <IntroContainer>
        <h1>Join the Stack Overflow community</h1>
        <div>
          <Chat fill="hsl(206,100%,52%)" />
          <span>Get unstuck — ask a question</span>
        </div>
        <div>
          <UpDownArrow fill="hsl(206,100%,52%)" />
          <span>Unlock new privileges like voting and commenting</span>
        </div>
        <div>
          <Tag fill="hsl(206,100%,52%)" />
          <span>Save your favorite tags, filters, and jobs</span>
        </div>
        <div>
          <Badge fill="hsl(206,100%,52%)" />
          <span>Earn reputation and badges</span>
        </div>
        <div className="collaborate">
          Collaborate and share knowledge with a private group for FREE. <br />
          <Link to="">
            Get Stack Overflow for Teams free for up to 50 users.
          </Link>
        </div>
      </IntroContainer>
      <SignupContainer>
        <SocialLoginContainer>
          <SocialLoginButton mode="google">
            Sign up with Google
          </SocialLoginButton>
          <SocialLoginButton mode="github">
            Sign up with GitHub
          </SocialLoginButton>
          <SocialLoginButton mode="facebook">
            Sign up with Facebook
          </SocialLoginButton>
        </SocialLoginContainer>
        <SignupFormContainer>
          <SignupFormInnerContainer onSubmit={handleSubmit}>
            <SignupContent>
              <label htmlFor="displayName">Display name</label>
              <input
                type="text"
                id="displayName"
                name="nickname"
                onChange={handleChange}
              />
            </SignupContent>
            <SignupContent>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </SignupContent>
            <SignupContent>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
              <span>
                Password Must be 8 to 20 Characters and a Combination of UpperCase/LowerCase Letters and Special Characters.
              </span>
            </SignupContent>
            <SignupContent>
              <BasicButton width="100%" margin="4px 0 32px 0">
                Sign up
              </BasicButton>
              <span className="policy">
                By clicking “Sign up”, you agree to our{' '}
                <Link to="/">terms of service</Link>,{' '}
                <Link to="/">privacy policy</Link> and{' '}
                <Link to="/">cookie policy</Link>
              </span>
            </SignupContent>
          </SignupFormInnerContainer>
        </SignupFormContainer>
        <LoginContainer>
          <div>
            Already have an account? <Link to="/login">Log in</Link>
          </div>
          <div>
            Are you an employer? <Link to="/">Sign up on Talent</Link>
          </div>
        </LoginContainer>
      </SignupContainer>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: hsl(210, 8%, 95%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroContainer = styled.div`
  width: 469px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid crimson; */
  padding-right: 48px;

  & h1 {
    font-size: 27px;
    margin-bottom: 32px;
  }

  & > div {
    display: flex;
    margin-bottom: 24px;
    align-items: center;
  }

  & > div > span {
    margin-left: 8px;
  }

  & .collaborate {
    display: block;
    margin-bottom: 0;
    font-size: 13px;
    color: hsl(210, 8%, 45%);
  }

  & a {
    text-decoration: none;
    margin-top: 4px;
    color: 'hsl(206,100%,52%)';
  }
`;

const SignupContainer = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

const SignupFormContainer = styled.div`
  /* height: 234px; */
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

const SignupFormInnerContainer = styled.form`
  /* border: 1px solid gray; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const SignupContent = styled.div`
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-weight: bold;
  margin: 6px 0;

  & label {
    padding: 2px;
  }

  & input {
    width: 100%;
    height: 32px;
    box-sizing: border-box;
    padding: 7.8px 9.1px;
    margin-top: 4px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
  }

  & span {
    font-weight: normal;
    font-size: 12px;
    color: rgb(106, 115, 124);
    margin: 4px 0;
  }

  & a {
    text-decoration: none;
  }
`;

const LoginContainer = styled.div`
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
    text-decoration: none;
  }
`;
