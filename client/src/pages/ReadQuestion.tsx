import LeftSide from 'components/Sidebar/Leftsidebar';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import QeustionandAnswer from 'components/Questions/QuestionandAnswer';
import BasicBtn from 'components/Button/BasicBtn';
import { RootState, useAppDispatch, useAppSelector } from 'redux/store';
import { getDetailThunk } from 'redux/actions/detailAction';

const Main_container = styled.div`
  padding-top: 50px;
  max-width: 1264px;
  background: none;
  display: flex;
  margin: 0 auto;
`;

const QuestionLists = styled.div`
  padding: 24px 16px;
  width: 100%;

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
`;

const Title = styled.div`
  padding: 0px 16px;
`;

const TopQuestions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
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
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { detail, isLoading } = useAppSelector(
    (state: RootState) => state.detail
  );

  useEffect(() => {
    dispatch(getDetailThunk(Number(id)));
  }, []);

  console.log('detail', detail);

  return (
    <Main_container>
      <LeftSide />
      <QuestionLists>
        <InnerWrapper>
          {isLoading || !detail ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <Title>
                <TopQuestions>
                  <h1>{detail.title}</h1>
                  <Link to="/questions">
                    <BasicBtn>Ask Question</BasicBtn>
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
                <QeustionandAnswer
                  content={detail.content}
                  answer={detail.answer}
                  createdAt={detail.createdAt}
                  author={detail.member}
                />
              </Content>
            </div>
          )}
        </InnerWrapper>
      </QuestionLists>
    </Main_container>
  );
};

export default ReadQuestion;
