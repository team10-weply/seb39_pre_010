import LeftSide from 'components/Sidebar/Leftsidebar';
import RightSideSrc from '../assets/images/rightbar_questionandanswer.png';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import QeustionandAnswer from 'components/Questions/QuestionandAnswer';

const Main_container = styled.div`
  padding-top: 50px;
  max-width: 1264px;
  background: none;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 100vh;
`;

const QuestionLists = styled.div`
  padding: 24px 0px;
  overflow-y: scroll;
  display: flex;
  background-color: green;
  justify-content: space-between;
  h1 {
    font-size: 1.7rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightpink;
`;

const Title = styled.div`
  padding: 0px 16px;
  background-color: lightblue;
`;

const TopQuestions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightSidePic = styled.img`
  display: inline-block;
  height: 506px;
  margin-left: 24px;
  margin-top: 1rem;
`;

const Bluebutton = styled.button`
  font-size: 0.78rem;
  padding: 10px 10px;
  height: 38px;
  width: 99px;
`;

const AskedandModified = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(227, 230, 232);
  p {
    display: inline-block;
    margin-right: 1rem;
    font-size: 0.8rem;
    color: rgb(106, 115, 124);
  }
  span {
    color: black;
  }
`;

const ReadQuestion = () => {
  return (
    <Main_container>
      <LeftSide />
      <QuestionLists>
        <InnerWrapper>
          <Title>
            <TopQuestions>
              <h1>
                How can I make typesafe accessors available for new project
                properties contributed by a Gradle plugin?
              </h1>
              <Link to="/questions">
                <Bluebutton>Ask Question</Bluebutton>
              </Link>
            </TopQuestions>
            <AskedandModified>
              <p>
                Asked <span>today</span>
              </p>
              <p>
                Modified <span>today</span>
              </p>
              <p>
                Viewed <span>13 times</span>
              </p>
            </AskedandModified>
          </Title>
          <Content>
            <QeustionandAnswer />
            <RightSidePic src={RightSideSrc} />
          </Content>
        </InnerWrapper>
      </QuestionLists>
    </Main_container>
  );
};

export default ReadQuestion;
