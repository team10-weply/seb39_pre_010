import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  height?: string;
  width?: string;
  padding?: string;
  borderRadius?: string;
  boredrColor?: string;
  bgColor?: string;
  color?: string;
  fontSize?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  shadow?: string;
  margin?: string;
  onClick?: () => void;
}

const BasicButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default BasicButton;

const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  width: ${(props) => props.width ?? 'auto'};
  height: ${(props) => props.height ?? '33px'};
  padding: ${(props) => props.padding ?? '10.4px'};
  font-size: ${(props) => props.fontSize ?? '13px'};
  background-color: ${(props) => props.bgColor ?? 'hsl(206, 100%, 52%)'};
  border: ${(props) =>
    props.boredrColor
      ? `1px solid ${props.boredrColor}`
      : '1px solid transparent'};
  border-radius: ${(props) => props.borderRadius ?? '3px'};
  color: ${(props) => props.color ?? 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-shadow: ${(props) =>
    props.shadow ?? 'inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)'};
  margin: ${(props) => props.margin ?? '0'};
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverBgColor ?? 'hsl(206,100%,40%)'};
    color: ${(props) => props.hoverColor ?? 'white'};
  }
`;
