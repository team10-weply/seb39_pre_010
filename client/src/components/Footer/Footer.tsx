import React from 'react';
import styled from 'styled-components';
import FooterLogoSrc from '../../assets/images/footer_logo.png';

const Footer_container = styled.footer`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 322px;
  background-color: #232629;
  padding: 8px;
`;
const Wrapper = styled.div`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 60px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  font-size: 0.85rem;
  h5 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: 0.7rem;
    font-weight: 100;
    a:hover {
      color: #d2d7dc;
    }
  }
  a {
    color: rgb(186, 191, 196);
    text-decoration: none;
  }
`;

const SNS = styled.div`
  color: rgb(145, 153, 161);
  font-size: 0.7rem;
  li {
    display: inline-block;
    margin-right: 1rem;
  }
`;

const Footer = () => {
  return (
    <Footer_container>
      <Wrapper>
        <Logo src={FooterLogoSrc} />
        <Flex>
          <div>
            <h5>
              <a href="#">STACK OVERFLOW</a>
            </h5>
            <ul>
              <li>
                <a href="#">Questions</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>
              <a href="#">PRODUCTS</a>
            </h5>
            <ul>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Collectives</a>
              </li>
              <li>
                <a href="#">Talent</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>
              <a href="#">COMPANY</a>
            </h5>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Work Here</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Cookie Settings</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>
              <a href="#">STACK EXCHANGE NETWORK</a>
            </h5>
            <ul>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Culture & recreation</a>
              </li>
              <li>
                <a href="#">Life & arts</a>
              </li>
              <li>
                <a href="#">Science</a>
              </li>
              <li>
                <a href="#">Professional</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Data</a>
              </li>
            </ul>
          </div>
        </Flex>
        <SNS>
          <div>
            <ul>
              <li>Blog</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </SNS>
      </Wrapper>
    </Footer_container>
  );
};

export default Footer;
