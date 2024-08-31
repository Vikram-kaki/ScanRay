import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Nova+Mono&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: 'Nunito', sans-serif;
    background-color: #252A34;
    color: #EAEAEA;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
  }

  @media (max-width: 768px) {
    body {
      font-size: 0.9rem;
    }
  }
`;

export default GlobalStyles;