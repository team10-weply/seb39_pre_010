import { IMember } from 'api/types/types';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import { ReactComponent as UpVote } from 'assets/images/VoteImages/UpVote.svg';
import { ReactComponent as DownVote } from 'assets/images/VoteImages/DownVote.svg';
import { ReactComponent as History } from 'assets/images/VoteImages/History.svg';
import { useParams } from 'react-router-dom';
import { client, headers } from 'api';
import BasicButton from 'components/Button/BasicButton';

interface Props {
  comment: string;
  member: IMember;
  createdAt: string;
  userInfo: string;
  answerId: number;
}

const Comment = ({ comment, member, createdAt, userInfo, answerId }: Props) => {
  const { id } = useParams();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const editorRef = useRef<Editor>(null);
  const [content, setContent] = useState(comment);

  const handleAnswerDelete = async () => {
    try {
      const response = await client.delete(
        `/api/v1/questions/${id}/answers/${answerId}`
      );
      window.location.reload();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnswerEdit = async () => {
    try {
      const response = await client.put(
        `/api/v1/questions/${id}/answers/${answerId}`,
        { comment: content },
        { headers }
      );
      window.location.reload();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleContentChange = () => {
    setContent(editorRef.current?.getInstance().getMarkdown() || '');
  };

  return (
    <Container>
      <VoteContainer>
        <div>
          <UpVote fill="rgb(186, 191, 196)" />
          <span>0</span>
          <DownVote fill="rgb(186, 191, 196)" />
          <History fill="rgb(186, 191, 196)" />
        </div>
      </VoteContainer>
      <ContentContainer>
        {isClicked ? (
          <>
            <Editor
              initialValue={content}
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
              onChange={handleContentChange}
            />
            <ButtonContainer>
              <BasicButton width="100px" onClick={handleAnswerEdit}>
                Save Edits
              </BasicButton>
              <BasicButton
                width="100px"
                bgColor="hsl(205,46%,92%)"
                boredrColor="hsl(205,41%,63%)"
                color="hsl(205,47%,42%)"
                hoverBgColor="hsl(205,57%,81%)"
                hoverColor="hsl(205,46%,32%)"
                margin="0 0 0 8px"
                onClick={() => setIsClicked(false)}
              >
                Cancel
              </BasicButton>
            </ButtonContainer>
          </>
        ) : (
          <>
            <Viewer initialValue={comment} />
            <CreateInfo>
              {userInfo === member.email ? (
                <div className="function">
                  <span>Share</span>
                  <span onClick={() => setIsClicked(true)}>Edit</span>
                  <span>Follow</span>
                  <span onClick={handleAnswerDelete}>Delete</span>
                </div>
              ) : (
                <div className="function">
                  <span>Share</span>
                  <span>Follow</span>
                </div>
              )}

              <div className="editInfo">edited 1 hour ago</div>
              <div className="author">
                <span>answered: {createdAt}</span>
                <span>{member.nickname}</span>
              </div>
            </CreateInfo>
          </>
        )}
      </ContentContainer>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid hsl(210, 8%, 90%);
  display: flex;
`;

const VoteContainer = styled.div`
  width: 36px;
  padding-right: 1rem;
  box-sizing: content-box;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & span {
    text-align: center;
    color: rgb(106, 115, 124);
    font-size: 21px;
    font-weight: 400;
    margin: -2px;
  }
`;

const ContentContainer = styled.div`
  padding-right: 1rem;
  width: 100%;
`;

const CreateInfo = styled.div`
  display: flex;
  font-size: 13px;
  color: hsl(210, 8%, 45%);
  margin-top: 24px;
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

  & .editInfo {
    color: hsl(206, 100%, 40%);
  }

  & .author {
    display: flex;
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`;
