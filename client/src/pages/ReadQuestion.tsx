import LeftSide from 'components/Sidebar/Leftsidebar';
import RightSideSrc from '../assets/images/rightbar_questionandanswer.png';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import QeustionandAnswer from 'components/Questions/QuestionandAnswer';
import BasicBtn from 'components/Button/BasicBtn';
import axios from 'axios';

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
  interface IListsInfo {
    questionId: number;
    title: string;
    member: IMember;
  }
  interface IMember {
    memberId: number;
    nickname: string;
    email: string;
    createdAt: number;
  }
  const [loading, setLoading] = useState(true);
  const [listsinfo, setListsinfo] = useState<IListsInfo[]>([]);
  const { questionId } = useParams();
  const getQuestionandAnswer = async () => {
    const response = await axios
      .get(`http://e7a2-118-32-35-58.ngrok.io/questions/13`)
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    getQuestionandAnswer();
  }, []);

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
            <QeustionandAnswer />
          </Content>
        </InnerWrapper>
      </QuestionLists>
    </Main_container>
  );
};

export default ReadQuestion;
