import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import FooterLogoSrc from '../../assets/images/footer_logo.png'

const Footer_container =styled.footer`

  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 322px;
  background-color: #232629;
  padding: 8px;
  a{
    color: #BABFC4;
    text-decoration: none;
    &:hover{
      color:#d2d7dc;
    }
    }
`
const Flex =styled.div`
  display: flex;
  justify-content: space-between;
  background-color: darkblue;
  width: 60%;
  position: absolute;
  left: 80px;
  top: 30px;
  font-size: .85rem;
  h5{
    font-weight: bold;
    margin-bottom: 1rem;
  }
  li{
    margin-bottom: 1rem;
  }
`
const Logo = styled.img`
    height: 60px;
    background-color: white;
`;

const Footer = () => {
  return <Footer_container>
    <Logo src={FooterLogoSrc} />
    <Flex>
      <div>
        <h5>
          <a href='#'>STACK OVERFLOW</a>
        </h5>
        <ul>
          <li><a href='#'>Questions</a></li>
          <li><a href='#'>Help</a></li>
        </ul>
      </div>
      <div>
        <h5>
          <a href='#'>PRODUCTS</a>
        </h5>
        <ul>
          <li><a href='#'>Advertising</a></li>
          <li><a href='#'>Collectives</a></li>
          <li><a href='#'>Talent</a></li>
        </ul>
      </div>
      <div>
        <h5>
          <a href='#'>COMPANY</a>
        </h5>
        <ul>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Press</a></li>
          <li><a href='#'>Work Here</a></li>
          <li><a href='#'>Legal</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Terms of Service</a></li>
          <li><a href='#'>Contact Us</a></li>
          <li><a href='#'>Cookie Settings</a></li>
          <li><a href='#'>Cookie Policy</a></li>
        </ul>
      </div>
      <div>
        <h5>
          <a href='#'>STACK EXCHANGE NETWORK</a>
        </h5>
        <ul>
          <li><a href='#'>Technology</a></li>
          <li><a href='#'>Culture & recreation</a></li>
          <li><a href='#'>Life & arts</a></li>
          <li><a href='#'>Science</a></li>
          <li><a href='#'>Professional</a></li>
          <li><a href='#'>Business</a></li>
          <li><a href='#'>API</a></li>
          <li><a href='#'>Data</a></li>
        </ul>
      </div>
  </Flex>
  </Footer_container>;
};

export default Footer;
