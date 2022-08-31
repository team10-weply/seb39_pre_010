import React from 'react';
import styled from 'styled-components';
import HeaderLogoSrc from '../../assets/images/header_logo.png';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #f48024;
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 47px;
  background-color: hsl(210, 8%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
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
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Line />
      <HeaderWrap>
        <Wrapper>
          <Link to="/">
            <Logo src={HeaderLogoSrc} />
          </Link>
          <form action="" className="search">
            <SearchInput type="text" placeholder="Search..." />
          </form>
        </Wrapper>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
