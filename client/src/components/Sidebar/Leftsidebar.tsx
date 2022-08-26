import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Left_container = styled.div`
  box-sizing: border-box;
  width: 164px;
  height: 100vh;
  background-color: green;
  padding: 10px;
`;

const Left = () => {
  return (
    <Left_container>
      <nav>
        <ol>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <ol>
              <li>PUBLIC</li>
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
              <li>COLLECTIVES</li>
              <li>
                <a href="#">Explore Collectives</a>
              </li>
            </ol>
          </li>
          <li>
            <span>TEAMS</span>
            <span>X</span>
          </li>
        </ol>
      </nav>
    </Left_container>
  );
};

export default Left;
