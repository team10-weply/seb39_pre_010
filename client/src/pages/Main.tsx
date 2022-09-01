import QuestionList from 'components/Questions/QuestionList';
import LeftSide from 'components/Sidebar/Leftsidebar';
import RightSide from 'components/Sidebar/Rightsidebar';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main_container = styled.div`
  padding-top: 50px;
  max-width: 1264px;
  width: 100%;
  background: none;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const QuestionLists = styled.div`
  padding: 24px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 1.7rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Inner = styled.div`
  padding: 0px 16px;
`;

const TopQuestions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bluebutton = styled.button`
  font-size: 0.78rem;
  padding: 12px 10px;
  height: 38px;
  width: 99px;
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
    border: 1px solid rgb(159, 166, 173);
    border-left: none;
    :first-child {
      border-radius: 3px 0 0 3px;
      border-left: solid 1px rgb(159, 166, 173);
    }
    :last-child {
      border-radius: 0 3px 3px 0;
    }
  }
  a:hover {
    background-color: #f4f1f1;
  }
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
              <Link to="/questions">
                <Bluebutton>Ask Question</Bluebutton>
              </Link>
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
        </InnerWrapper>

        <RightSide />
      </QuestionLists>
    </Main_container>
  );
};

export default Main;
