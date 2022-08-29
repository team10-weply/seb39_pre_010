import React from 'react';
import styled from 'styled-components';
import TagAndId from './TagAndId';

const QuestionRow = styled.div`
  border-top: 1px solid gray;
  padding: 10px 15px;
  background-color: aquamarine;
  display: flex;
  height: 106px;
`;

const StateColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 110px;
  background-color: blue;
  margin-right: 15px;
`;

const QuestionStat = styled.div`
  text-align: center;
  font-size: 0.85rem;
  display: inline-block;
  background-color: antiquewhite;
  height: 25px;
  line-height: 25px;
`;
const QuestionTitleAear = styled.div`
  width: 100%;
  background-color: brown;
  margin-top: 18px;
  h2 {
    margin-bottom: 8px;
  }
  h2 > a {
    font-size: 1.1rem;
    color: #205a9d;
    line-height: 24px;
  }
  h2 > a:hover {
    color: #3c72b0;
  }
`;

const QuestionList = () => {
  return (
    <QuestionRow>
      <StateColumn>
        <QuestionStat>0 votes</QuestionStat>
        <QuestionStat>1 answers</QuestionStat>
        <QuestionStat>1 views</QuestionStat>
      </StateColumn>
      <QuestionTitleAear>
        <h2>
          <a href="#">
            In Victory charts, the custom tooltip has performance issues. How to
            resolve?
          </a>
        </h2>
        <TagAndId />
      </QuestionTitleAear>
    </QuestionRow>
  );
};

export default QuestionList;
