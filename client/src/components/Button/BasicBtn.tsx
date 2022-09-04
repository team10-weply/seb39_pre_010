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

// a{
//     text-decoration:none;
//     color:inherit;
// }
// input{
//     border: 1px solid rgb(186,191,196);
//     :focus {
//         outline: none !important;
//         border-color: #94caf3;
//         box-shadow: 0 0 0px 4px #d6edfc;
//     }
// }

export default BasicBtn;
