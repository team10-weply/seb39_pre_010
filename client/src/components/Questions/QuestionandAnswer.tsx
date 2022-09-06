import React from 'react';
import styled from 'styled-components';
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
const YourQuestion = styled.div``;
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

const QeustionandAnswer: React.FC<{ content: string | undefined }> = (
  props
) => {
  return (
    <QeustionandAnswerContainer>
      <Wrapper>
        <VoteandQuestion>
          <VotePic src={VoteSrc}></VotePic>
          <YourQuestion>
            <p>{props.content}</p>
            <AddComments>
              <a href="#">Add a comment</a>
            </AddComments>
          </YourQuestion>
        </VoteandQuestion>

        <YourAnswer>
          <p>
            Know someone who can answer? Share a link to this{' '}
            <a href="#">question</a> via <a href="#">email</a>,{' '}
            <a href="#">Twitter</a>, or <a href="#">Facebook</a>.
          </p>
          <CommentWrite />
        </YourAnswer>
      </Wrapper>
    </QeustionandAnswerContainer>
  );
};

export default QeustionandAnswer;
