import axios from 'axios';
import BasicBtn from 'components/Button/BasicBtn';
import InputBorder from 'components/Input/InputBorder';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { IListsInfo } from './QuestionList';

const QuestionForm = styled.form``;

const QuestionContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 3px;
  padding: 16px;
  margin-bottom: 2rem;
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
  const [posts, setPosts] = useState<IListsInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isLoading && titleRef.current && contentRef.current) {
      setIsLoading(true);
      const title = titleRef.current.value;
      const content = contentRef.current.value;
      const response = await axios
        .post('/questions', { title: title, content: content })
        .then((res) => {
          setIsLoading(false);
          setPosts([res.data, ...posts]);
          alert('글 작성완료!');
        })
        .catch((err) => alert('글 작성에 실패하였습니다.'));
    }
  };

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);

  return (
    <QuestionForm onSubmit={onSubmit}>
      <QuestionContainer>
        <Title>
          <h2>Title</h2>
          <p>
            Be specific and imagine you’re asking a question to another person
          </p>
          <InputBorder
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            ref={titleRef}
          />
        </Title>
        <Body>
          <h2>Body</h2>
          <p>
            Include all the information someone would need to answer your
            question
          </p>
          <textarea cols={92} rows={15} ref={contentRef} />
        </Body>
        <Tags>
          <h2>Tags</h2>
          <p>Add up to 5 tags to describe what your question is about</p>

          <InputBorder
            type="text"
            placeholder="e.g. (angular sql-server string)"
            ref={tagRef}
          />
        </Tags>
      </QuestionContainer>
      <BasicBtn>Post your question</BasicBtn>
    </QuestionForm>
  );
};

export default PublicQuestion;
