import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TagAndId from './TagAndId';
import { Link } from 'react-router-dom';
import { client } from 'api';
import { IQuestionList } from 'api/types/types';

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
  const [loading, setLoading] = useState(true);
  const [listsinfo, setListsinfo] = useState<IQuestionList[]>([]);

  const getQuestionLists = async () => {
    try {
      setLoading(false);
      return await client.get('/api/v1/questions').then((res: any) => {
        setListsinfo(res.data.content);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestionLists();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {listsinfo.map((question) => (
            <QuestionRow key={question.questionId}>
              <StateColumn>
                <QuestionStat>0 votes</QuestionStat>
                <QuestionStat>1 answers</QuestionStat>
                <QuestionStat>1 views</QuestionStat>
              </StateColumn>
              <QuestionTitleAear>
                <Link to={`/questions/${question.questionId}`}>
                  <h2>{question.title}</h2>
                </Link>

                <TagAndId
                  nickname={question.nickname}
                  createdAt={question.createdAt}
                />
              </QuestionTitleAear>
            </QuestionRow>
          ))}
        </div>
      )}
    </>
  );
};

export default QuestionList;
