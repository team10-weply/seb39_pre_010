import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderLogoSrc from '../../assets/images/header_logo.png';

const Header_container = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: yellow;
  padding: 10px;
`;

const Logo = styled.img`
  height: 100%;
`;

// export const GlobalStyle = createGlobalStyle`
//   body{padding:0; margin:0}
// `;

const Header = () => {
  return (
    <Header_container>
      <Logo src={HeaderLogoSrc} />
      <form action="" className="search">
        <input type="text" placeholder="Search..."></input>
      </form>
    </Header_container>
  );
};

export default Header;
