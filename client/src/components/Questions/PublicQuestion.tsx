import React from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 3px;
  padding: 16px;
  line-height: 1.2rem;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  input {
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    border-radius: 3px;
  }
  h2 {
    margin-bottom: 0.2rem;
    font-weight: 510;
  }
  p {
    font-size: 0.73rem;
  }
`;
const Title = styled.div`
  height: 76px;
  margin-bottom: 16px;
`;
const Body = styled.div`
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
        <form>
          <textarea cols={92} rows={15}></textarea>
        </form>
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
