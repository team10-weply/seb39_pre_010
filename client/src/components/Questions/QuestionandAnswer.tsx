import React from 'react';
import styled from 'styled-components';
import WritingToolSrc from '../../assets/images/writingtoolbox_questionandanswer.png';
import MarkdownSrc from '../../assets/images/markdown_question.png';
import VoteSrc from '../../assets/images/vote_questionandanswer.png';
import TagAndId from './TagAndId';

const QeustionandAnswerContainer = styled.div`
  padding: 0 16px;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  background-color: yellow;
`;
const VotePic = styled.img`
  margin-right: 16px;
  display: inline-block;
  width: 40px;
  height: 171.5px;
`;

const Wrapper = styled.div``;
const VoteandQuestion = styled.div`
  display: flex;
`;
const YourQuestion = styled.div``;
const Tags = styled.div``;
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

const WritingToolPic = styled.img`
  display: inline-block;
  width: 100.3%;
`;

const QeustionandAnswer = () => {
  return (
    <QeustionandAnswerContainer>
      <Wrapper>
        <VoteandQuestion>
          <VotePic src={VoteSrc}></VotePic>
          <YourQuestion>
            <p>
              I&apos;m an absolute beginner. I want to build a chrome extension
              that will interact with the login API. I need following: -- user
              can login via input &quot;email&quot; and &quot;password&quot; or
              might be login through my app.
              <br />
              -- after that a session will be saved into the local storage.
              where I can access the details of users.
              <br />
              -- If user logged-out from my website, my extension will also be
              logged-out. again login and start working on it.
              <br />
              -- how can I display my popup while selection of textarea text.
              For Example I select any text my extension will display via popup.
            </p>
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
          <h2>Your Answer</h2>
          <WritingToolPic src={WritingToolSrc} />
          <form>
            <textarea cols={92} rows={15}></textarea>
          </form>
        </YourAnswer>
      </Wrapper>
    </QeustionandAnswerContainer>
  );
};

export default QeustionandAnswer;
