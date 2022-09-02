import PublicQuestion from 'components/Questions/PublicQuestion';
import React from 'react';
import styled from 'styled-components';
import RobotPicSrc from '../assets/images/robot_question.png';
import LearnStepsSrc from '../assets/images/steps_question.png';

const Body = styled.div`
  padding-top: 50px;
  background-color: #f1f2f3;
`;
const Question_container = styled.div`
  box-sizing: border-box;
  max-width: 1264px;
  width: 100%;
  height: 826px;
  background: none;
  margin: 0 auto;
  background-color: #f1f2f3;
  padding: 0 24px 24px 24px;
`;

const AskQTitle = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.8rem;
  }
`;

const BackgroundPic = styled.img`
  height: 130px;
  display: inline-block;
`;

const QuestionMain = styled.div``;

const PostBtn = styled.button`
  font-size: 0.78rem;
  padding: 12px 10px;
  margin-top: 2rem;
`;

const QuestionList = () => {
  return (
    <Body>
      <Question_container>
        <AskQTitle>
          <h1>Ask a public question</h1>
          <BackgroundPic src={RobotPicSrc} />
        </AskQTitle>
        <QuestionMain>
          <PublicQuestion />
        </QuestionMain>
        <PostBtn>Post your question</PostBtn>
      </Question_container>
    </Body>
  );
};

export default QuestionList;
