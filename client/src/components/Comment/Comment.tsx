import { IMember } from 'api/types/types';
import React from 'react';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import { ReactComponent as UpVote } from 'assets/images/VoteImages/UpVote.svg';
import { ReactComponent as DownVote } from 'assets/images/VoteImages/DownVote.svg';
import { ReactComponent as History } from 'assets/images/VoteImages/History.svg';

interface Props {
  comment: string;
  member: IMember;
  createdAt: string;
}

const Comment = ({ comment, member, createdAt }: Props) => {
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
        <Viewer initialValue={comment} />
        <CreateInfo>
          <div className="function">
            <span>Share</span>
            <span>Edit</span>
            <span>Follow</span>
          </div>
          <div className="editInfo">edited 1 hour ago</div>
          <div className="author">
            <span>answered: {createdAt}</span>
            <span>{member.nickname}</span>
          </div>
        </CreateInfo>
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
