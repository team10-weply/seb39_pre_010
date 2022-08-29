import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderLogoSrc from '../../assets/images/header_logo.png';

const Line = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 3px;
  background-color: #f48024;
`;

const Header_container = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 47px;
  background-color: yellow;
  padding: 10px;
  display: flex;
  form {
    width: 100%;
    margin: 0 20px;
  }
`;

const Wrapper = styled.div`
  width: 1264px;
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
  display: inline-block;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 3px;
  border: 1px solid black;
`;

// export const GlobalStyle = createGlobalStyle`
//   body{padding:0; margin:0}
// `;

const Header = () => {
  return (
    <div>
      <Line />
      <Header_container>
        <Wrapper>
          <a href="#">
            <Logo src={HeaderLogoSrc} />
          </a>
          <form action="" className="search">
            <SearchInput type="text" placeholder="Search..." />
          </form>
        </Wrapper>
      </Header_container>
    </div>
  );
};

export default Header;
