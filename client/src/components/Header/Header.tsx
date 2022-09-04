import React from 'react';
import styled from 'styled-components';
import HeaderLogoSrc from '../../assets/images/header_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import BasicButton from 'components/Button/BasicButton';

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

const Wrapper = styled.div`
  width: 1264px;
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
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
    display: flex;
    flex-grow: 1;
    margin: 0 8px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 33px;
  border-radius: 3px;
  border: 1px solid rgb(186, 191, 196);
  :focus {
    outline: none !important;
    border-color: #94caf3;
    box-shadow: 0 0 0px 4px #d6edfc;
  }
`;

const Logo = styled.img`
  height: 30px;
  display: inline-block;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;

const Header = () => {
  const navigate = useNavigate();

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
          <Buttons>
            <BasicButton
              padding="8px 10.4px"
              bgColor="hsl(205,46%,92%)"
              boredrColor="hsl(205,41%,63%)"
              color="hsl(205,47%,42%)"
              hoverBgColor="hsl(205,57%,81%)"
              hoverColor="hsl(205,46%,32%)"
              margin="0 4px 0 0"
              onClick={() => navigate('/login')}
            >
              Log in
            </BasicButton>
            <BasicButton onClick={() => navigate('/signup')}>
              Sign up
            </BasicButton>
          </Buttons>
        </Wrapper>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
