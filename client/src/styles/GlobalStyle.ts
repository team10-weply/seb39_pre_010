import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
a{
    text-decoration:none;
    color:inherit;
}
input{
    border: 1px solid rgb(186,191,196);
    :focus { 
        outline: none !important; 
        border-color: #94caf3;
        box-shadow: 0 0 0px 4px #d6edfc;
    }
}
button{
    background-color: hsl(206,100%,52%);
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    border: 1px solid transparent;
    border-radius: 3px;
    color: white;
   :hover{
    cursor: pointer;
    background-color: #0074CC;
   }
}

`;

export default GlobalStyle;
