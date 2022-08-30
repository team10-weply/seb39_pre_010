import React from 'react';
import styled from 'styled-components';
import WritingToolSrc from '../../assets/images/writingtoolbox_question.png';
import MarkdownSrc from '../../assets/images/markdown_question.png';

const QuestionContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 3px;
  width: 873px;
  height: 585px;
  padding: 16px;
  line-height: 1.2rem;
  input {
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    border-radius: 3px;
  }
  p {
    font-size: 0.73rem;
  }
`;
const Title = styled.div`
  width: 839px;
  height: 76px;
  margin-bottom: 16px;
`;
const Body = styled.div`
  width: 839px;
  height: 365px;
  margin-bottom: 16px;
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
  width: 100.2%;
  display: inline-block;
`;

const MarkdownPic = styled.img`
  width: 100.2%;
  display: inline-block;
`;

const Tags = styled.div``;

const PublicQuestion = () => {
  return (
    <QuestionContainer>
      <Title>
        <h2>Title</h2>
        <p>
          Be specific and imagine you’re asking a question to another person
        </p>
        <form>
          <input
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          ></input>
        </form>
      </Title>
      <Body>
        <h2>Body</h2>
        <p>
          Include all the information someone would need to answer your question
        </p>
        <WritingToolPic src={WritingToolSrc} />
        <form>
          <textarea
            cols={92}
            rows={15}
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          ></textarea>
        </form>
        <MarkdownPic src={MarkdownSrc} />
      </Body>
      <Tags>
        <h2>Tags</h2>
        <p>Add up to 5 tags to describe what your question is about</p>
        <form>
          <input
            type="text"
            placeholder="e.g. (angular sql-server string)"
          ></input>
        </form>
      </Tags>
    </QuestionContainer>
  );
};

export default PublicQuestion;
