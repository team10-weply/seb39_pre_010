import React from 'react';
import styled from 'styled-components';
import RightbarBlogSrc from '../../assets/images/rightbar_blog.png';
import RightbarFiltersSrc from '../../assets/images/rightbar_filters.png';

const RightContainer = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 0 0 15px;
  flex: none;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const BlogAd = styled.img`
  display: inline-block;
  width: 100%;
`;

const CustomFilters = styled.img`
  display: inline-block;
  width: 100%;
`;
const Right = () => {
  return (
    <RightContainer>
      <BlogAd src={RightbarBlogSrc} />
      <CustomFilters src={RightbarFiltersSrc} />
    </RightContainer>
  );
};

export default Right;
