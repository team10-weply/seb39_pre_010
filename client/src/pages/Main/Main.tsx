import Nav from 'components/Sidebar/Leftsidebar';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Main_container = styled.div`
  display: flex;
`;
const TopQuestion = styled.div`
  padding: 24px 16px;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  h1 {
    font-size: 2.08rem;
  }
  a {
    text-decoration: none;
    color: black;
    padding: 10px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 3px;
  }
`;

const Main = () => {
  return (
    <Main_container>
      <Nav />
      <TopQuestion>
        <h1>Top Questions</h1>
        <div>
          <a href="#">Ask Question</a>
        </div>
        <div>
          <div>
            <a href="#">Interesting</a>
            <a href="#">
              <span>307</span>Bountied
            </a>
            <a href="#">Hot</a>
            <a href="#">Week</a>
            <a href="#">Month</a>
          </div>
        </div>
      </TopQuestion>
    </Main_container>
  );
};

export default Main;
