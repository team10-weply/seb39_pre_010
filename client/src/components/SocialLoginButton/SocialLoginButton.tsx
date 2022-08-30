import { SocialLogos } from 'assets/images/SocialLogo';
import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
  color?: string;
  mode: 'google' | 'github' | 'facebook';
  onClick?: () => void;
}

interface ISocialLoginButtonOptions {
  [key: string]: {
    bgColor: Props['bgColor'];
    color: Props['color'];
    logoImg: string;
    fill?: string;
  };
}

const SocialLoginButtonOptions: ISocialLoginButtonOptions = {
  google: {
    bgColor: 'white',
    color: 'black',
    logoImg: SocialLogos.googleLogo,
  },
  github: {
    bgColor: 'hsl(210, 8%, 20%)',
    color: 'white',
    logoImg: SocialLogos.githubLogo,
  },
  facebook: {
    bgColor: '#385499',
    color: 'white',
    logoImg: SocialLogos.facebookLogo,
  },
};

const SocialLoginButton = ({ mode, children, ...props }: Props) => {
  const { bgColor, color, logoImg } = SocialLoginButtonOptions[mode];
  return (
    <Button mode={mode} bgColor={bgColor} color={color} {...props}>
      <img src={logoImg} alt={`${mode}Logo`} />
      <span>{children}</span>
    </Button>
  );
};

export default SocialLoginButton;

const Button = styled.button<Props>`
  border: 1px solid rgb(214, 217, 220);
  margin: 0.25rem 0;
  width: 100%;
  height: 37px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.25rem;

  & img {
    width: 18px;
    height: 18px;
  }

  & span {
    margin-left: 4px;
  }
`;
