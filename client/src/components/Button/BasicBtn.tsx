import styled from 'styled-components';
const BasicBtn = styled.button`
  padding: 10px;
  font-size: 0.78rem;
  background-color: hsl(206, 100%, 52%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border: 1px solid transparent;
  border-radius: 3px;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #0074cc;
  }
`;

export default BasicBtn;
