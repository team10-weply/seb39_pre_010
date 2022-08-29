import QuestionList from 'components/Questions/QuestionList';
import LeftSide from 'components/Sidebar/Leftsidebar';
import RightSide from 'components/Sidebar/Rightsidebar';
import React from 'react';
import styled from 'styled-components';

const Main_container = styled.div`
  max-width: 1264px;
  width: 100%;
  background: none;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 100vh;
`;
const QuestionLists = styled.div`
  padding: 24px 0px;
  background-color: aliceblue;
  width: 100%;
  overflow-y: scroll;
  display: flex;

  h1 {
    font-size: 1.8rem;
  }
`;
const TopQuestions = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: yellow;
`;
const Bluebutton = styled.button`
  background-color: #4197d9;
  color: white;
  border: 0;
  border-radius: 3px;
  padding: 12px 10px;
`;

const SortingQuestions = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-size: 0.8rem;
  a {
    text-decoration: none;
    color: black;
    padding: 12px 10px;
    display: inline-block;
    border: 1px solid black;
    border-left: none;
    :first-child {
      border-radius: 3px 0 0 3px;
      border-left: solid 1px;
    }
    :last-child {
      border-radius: 0 3px 3px 0;
    }
  }
  a:hover {
    background-color: #f4f1f1;
  }
`;
const InnerWrapper = styled.div`
  background-color: blanchedalmond;
  display: flex;
  flex-direction: column;
`;
const Inner = styled.div`
  padding: 0px 16px;
  background-color: khaki;
`;

const Main = () => {
  return (
    <Main_container>
      <LeftSide />
      <QuestionLists>
        <InnerWrapper>
          <Inner>
            <TopQuestions>
              <h1>Top Questions</h1>
              <Bluebutton>Ask Question</Bluebutton>
            </TopQuestions>

            <SortingQuestions>
              <div>
                <a href="#">Interesting</a>
                <a href="#">
                  <span>307</span> Bountied
                </a>
                <a href="#">Hot</a>
                <a href="#">Week</a>
                <a href="#">Month</a>
              </div>
            </SortingQuestions>
          </Inner>
          <QuestionList />
          <QuestionList />
          <QuestionList />
        </InnerWrapper>
        <RightSide />
      </QuestionLists>
    </Main_container>
  );
};

export default Main;
