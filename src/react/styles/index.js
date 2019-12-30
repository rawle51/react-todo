import { css, createGlobalStyle } from 'styled-components';

export const backgroundGradient = css`
  background: linear-gradient(45deg, #421744, rgb(12, 38, 95), #410344);
  -webkit-background-clip: text;
          background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  svg {
    cursor: pointer;
  }

  #root {
      width: 700px;
      margin: 0 auto;
  }
`;
