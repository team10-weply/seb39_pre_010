import React from 'react';
import styled from 'styled-components';
import dummy from '../../assets/data/dummy.json';

const TagAndId_wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tag = styled.div`
  display: inline-block;
  margin-right: 6px;
  a {
    text-decoration: none;
    padding: 4px 7px;
    font-size: 0.8rem;
    border-radius: 3px;
    background-color: #d0e3f1;
    color: #59778a;
  }
  a:hover {
    background-color: #bccedc;
    color: #506b7c;
  }
`;

const Id = styled.div`
  font-size: 13px;
  color: hsl(210, 8%, 45%);
`;

const TagAndId: React.FC<{ nickname: string; createdAt: number }> = (props) => {
  return (
    <>
      <TagAndId_wrapper>
        <div>
          <Tag>
            <a href="#">tag</a>
          </Tag>
          <Tag>
            <a href="#">tag</a>
          </Tag>
          <Tag>
            <a href="#">tag</a>
          </Tag>
        </div>

        <Id>
          <span>
            {props.nickname}
            <br />
            asked {props.createdAt}
          </span>
        </Id>
      </TagAndId_wrapper>
    </>
  );
};

export default TagAndId;
