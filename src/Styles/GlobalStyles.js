import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }

  body, html {
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
    font-family: "Roboto", serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  
`;

export default GlobalStyles;
