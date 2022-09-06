import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;
    a{
    text-decoration:none;
    color:inherit;
    }
}
body{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
}
`;

export default GlobalStyle;
