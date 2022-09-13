import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import LeftSide from 'components/Sidebar/Leftsidebar';
import { RootState, useAppDispatch, useAppSelector } from 'redux/store';
import { getDetailThunk } from 'redux/actions/detailAction';
import { Editor } from '@toast-ui/react-editor';
import BasicButton from 'components/Button/BasicButton';
import { client, headers } from 'api';

const Edit = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { detail, isLoading } = useAppSelector(
    (state: RootState) => state.detail
  );
  const [question, setQuestion] = useState({ title: '', content: '' });
  const editorRef = useRef<Editor>(null);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetailThunk(Number(id)));

    if (detail) {
      setQuestion({
        title: detail.title,
        content: detail.content,
      });
    }
  }, []);

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion({ ...question, title: event.target.value });
  };

  const onContentChange = () => {
    setQuestion({
      ...question,
      content: editorRef.current?.getInstance().getMarkdown() || '',
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await client.put(
        `/api/v1/questions/${id}`,
        { ...question, tag: [] },
        { headers }
      );
      navigate('/');
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <LeftSide />
      <ContentContainer>
        <ContentForm onSubmit={onSubmit}>
          {isLoading || !detail ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <TitleContainer>
                <h2>Title</h2>
                <input value={question.title} onChange={onTitleChange} />
              </TitleContainer>
              <EditContainer>
                <h2>Body</h2>
                <Editor
                  initialValue={question.content}
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
                  onChange={onContentChange}
                />
              </EditContainer>
            </div>
          )}
          <ButtonContainer>
            <BasicButton width="100px">Save Edits</BasicButton>
            <BasicButton
              width="100px"
              bgColor="hsl(205,46%,92%)"
              boredrColor="hsl(205,41%,63%)"
              color="hsl(205,47%,42%)"
              hoverBgColor="hsl(205,57%,81%)"
              hoverColor="hsl(205,46%,32%)"
              margin="0 0 0 8px"
              onClick={() => navigate(-1)}
            >
              Cancel
            </BasicButton>
          </ButtonContainer>
        </ContentForm>
      </ContentContainer>
    </Container>
  );
};

export default Edit;

const Container = styled.div`
  padding: 50px;
  max-width: 1264px;
  display: flex;
  margin: 0 auto;
`;
const ContentContainer = styled.div`
  padding: 24px;
  width: 100%;
`;

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;
  & h2 {
    font-size: 1rem;
    margin-bottom: 6px;
  }

  & input {
    width: 100%;
    padding: 7.8px 9.1px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
  }
`;

const EditContainer = styled.div`
  margin-bottom: 1rem;
  & h2 {
    font-size: 1rem;
    margin-bottom: 6px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;
