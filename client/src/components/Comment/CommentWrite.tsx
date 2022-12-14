import { Editor } from '@toast-ui/react-editor';
import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import styled from 'styled-components';
import BasicButton from 'components/Button/BasicButton';
import { client, headers } from 'api';
import { useParams } from 'react-router-dom';

const CommentWrite: React.FC = () => {
  const editorRef = useRef<Editor>(null);
  const { id } = useParams();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const comment = editorRef.current?.getInstance().getMarkdown();
    try {
      const response = await client.post(
        `/api/v1/questions/${id}/answers`,
        {
          comment,
        },
        { headers }
      );
      window.location.reload();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h2>Your Answer</h2>
      <Editor
        initialValue=""
        height="250px"
        initialEditType="markdown"
        hideModeSwitch={true}
        useCommandShortcut={true}
        ref={editorRef}
        autofocus={false}
        toolbarItems={[
          ['bold', 'italic'],
          ['link', 'quote', 'codeblock', 'image'],
          ['ol', 'ul', 'heading', 'hr'],
        ]}
      />
      <ButtonContainer>
        <BasicButton margin="0 2px">Post Your Answer</BasicButton>
      </ButtonContainer>
    </Container>
  );
};

export default CommentWrite;

const Container = styled.form`
  max-width: 1100px;

  & h2 {
    padding-top: 20px;
    margin-bottom: 19px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 18px;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
`;
