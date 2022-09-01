import React from 'react';
import styled from 'styled-components';
import TagAndId from './TagAndId';
import dummy from '../../assets/data/dummy.json';
import { Link } from 'react-router-dom';

const QuestionRow = styled.div`
  border-top: 1px solid rgb(227, 230, 232);
  padding: 10px 15px;
  display: flex;
  height: 106px;
  flex: none;
`;

const StateColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 110px;
  margin-right: 15px;
`;

const QuestionStat = styled.div`
  text-align: center;
  font-size: 0.85rem;
  display: inline-block;
  height: 25px;
  line-height: 25px;
`;
const QuestionTitleAear = styled.div`
  width: 100%;
  margin-top: 0.4rem;
  h2 {
    margin-bottom: 0.5rem;
  }
  h2 > a {
    font-size: 1.1rem;
    color: rgb(0, 116, 204);
    line-height: 24px;
  }
  h2 > a:hover {
    color: #3c72b0;
  }
`;

const QuestionList = () => {
  return (
    <>
      {dummy.question.map((question) => (
        <QuestionRow key={question.id}>
          <StateColumn>
            <QuestionStat>0 votes</QuestionStat>
            <QuestionStat>1 answers</QuestionStat>
            <QuestionStat>1 views</QuestionStat>
          </StateColumn>
          <QuestionTitleAear>
            <Link to={`/questions/${question.id}`}>
              <h2>{question.title}</h2>
            </Link>

            <TagAndId memberid={question.member_id} />
          </QuestionTitleAear>
        </QuestionRow>
      ))}
    </>
  );
};

export default QuestionList;
