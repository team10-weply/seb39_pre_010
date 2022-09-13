import { client } from 'api';
import { IComment, IMember } from 'api/types/types';
import Comment from 'components/Comment/Comment';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { user } from 'utils/user';
import VoteSrc from '../../assets/images/vote_questionandanswer.png';
import CommentWrite from '../Comment/CommentWrite';

const QeustionandAnswerContainer = styled.div`
  padding: 0 16px;
  width: 100%;
  margin-top: 1rem;
  display: flex;
`;

const VotePic = styled.img`
  margin-right: 16px;
  display: inline-block;
  width: 40px;
  height: 171.5px;
`;

const Wrapper = styled.div`
  width: 100%;
`;
const VoteandQuestion = styled.div`
  display: flex;
`;
const YourQuestion = styled.div`
  width: 100%;
`;
const AddComments = styled.div`
  margin-top: 3rem;
  a {
    color: rgb(131, 140, 149);
    font-size: 0.8rem;
  }
`;
const YourAnswer = styled.div`
  margin-top: 3rem;
  a {
    color: rgb(0, 116, 204);
    :hover {
      color: hsl(206, 100%, 52%);
    }
  }
  h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  textarea {
    box-sizing: border-box;
    padding: 10px;
    margin: -1px 0 0;
    height: 200px;
    width: 100%;
    line-height: 1.3;
    tab-size: 4;
    border: 1px solid rgb(186, 191, 196);
    :focus {
      outline: none !important;
      border-color: #94caf3;
      box-shadow: 0 0 0px 4px #d6edfc;
    }
  }
`;

const CreateInfo = styled.div`
  display: flex;
  font-size: 13px;
  color: hsl(210, 8%, 45%);
  padding: 1rem 0;
  & div {
    display: flex;
    flex-grow: 1;
  }

  & .function {
    margin: -4px;
  }

  & .function > span {
    margin: 4px;
  }

  & .author {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
`;

interface Props {
  content: string;
  createdAt: number;
  author: IMember;
  answer: IComment[];
}

const QeustionandAnswer = ({ content, createdAt, author, answer }: Props) => {
  const navigate = useNavigate();
  const userInfo = user.getUser() ? JSON.parse(user.getUser()!) : null;
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      const response = await client.delete(`/api/v1/questions/${id}`);
      navigate('/');

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(answer);
  return (
    <QeustionandAnswerContainer>
      <Wrapper>
        <VoteandQuestion>
          <VotePic src={VoteSrc}></VotePic>
          <YourQuestion>
            <p>{content}</p>
            <CreateInfo>
              {userInfo?.username === author.email ? (
                <div className="function">
                  <span>Share</span>
                  <span onClick={() => navigate(`/questions/edit/${id}`)}>
                    Edit
                  </span>
                  <span>Follow</span>
                  <span onClick={handleDelete}>Delete</span>
                </div>
              ) : (
                <div className="function">
                  <span>Share</span>
                  <span>Follow</span>
                </div>
              )}

              <div className="author">
                <span>asked: {createdAt}</span>
                <span>{author.nickname}</span>
              </div>
            </CreateInfo>
            <AddComments>
              <a href="#">Add a comment</a>
            </AddComments>
          </YourQuestion>
        </VoteandQuestion>

        <YourAnswer>
          {answer.length > 0 ? (
            <>
              {answer.map((el: IComment) => {
                return (
                  <Comment
                    key={el.answerId}
                    comment={el.comment}
                    member={el.member}
                    createdAt={el.createdAt}
                    userInfo={userInfo ? userInfo.username : null}
                    answerId={el.answerId}
                  />
                );
              })}
            </>
          ) : (
            <p>
              Know someone who can answer? Share a link to this{' '}
              <a href="#">question</a> via <a href="#">email</a>,{' '}
              <a href="#">Twitter</a>, or <a href="#">Facebook</a>.
            </p>
          )}

          <CommentWrite />
        </YourAnswer>
      </Wrapper>
    </QeustionandAnswerContainer>
  );
};

export default QeustionandAnswer;
