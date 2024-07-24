import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        background-color: #121212;
        color: #ffffff;
    }
    a {
        color: #1e90ff;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
`;

export default GlobalStyle;
