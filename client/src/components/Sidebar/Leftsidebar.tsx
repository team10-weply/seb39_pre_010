import React from 'react';
import styled from 'styled-components';
import LeftbarAdSrc from '../../assets/images/leftbar_ad.png';

const Left_container = styled.div`
  height: 100vh;
  background-color: green;
  color: #b4b0af;
  width: 164px;
`;

const Sticky_container = styled.div`
  position: sticky;
  width: auto;
  overflow-y: auto;
`;

const Nav = styled.nav`
  li {
    margin: 20px 0 20px 10px;
    font-size: 0.8rem;
  }
  li.title {
    font-size: 0.73rem;
  }
  a {
    color: #2c2c2c;
  }
  a:hover {
    color: #0e0e0e;
  }
`;

const TeamAd = styled.img`
  display: inline-block;
  width: 164px;
`;

const Left = () => {
  return (
    <Left_container>
      <Sticky_container>
        <Nav>
          <ol>
            <li>
              <a href="#">Home</a>
            </li>
            <li className="title">
              PUBLIC
              <ol>
                <li>
                  <a href="#">Questions</a>
                </li>
                <li>
                  <a href="#">Tags</a>
                </li>
                <li>
                  <a href="#">Users</a>
                </li>
                <li>
                  <a href="#">Companies</a>
                </li>
              </ol>
            </li>
            <li className="title">
              COLLECTIVES
              <ol>
                <li>
                  <a href="#">Explore Collectives</a>
                </li>
              </ol>
            </li>
            <li className="title">TEAMS</li>
          </ol>
        </Nav>
        <TeamAd src={LeftbarAdSrc} />
      </Sticky_container>
    </Left_container>
  );
};

export default Left;
