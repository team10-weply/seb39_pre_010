import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
`;

export default GlobalStyle;
