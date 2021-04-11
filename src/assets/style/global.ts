import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --blue: #5429CC;
    --blue-light: #6933FF;
    --success: #33CC95;
    --danger: #E62E4D;
    --dark: #363F5F;
    --dark-light: #969CB3;
    --white: #FFFFFF;
    --white-light: #F0F2F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  button {
    cursor: pointer;
    /*transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }*/
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html, body, #root {
		height:100%;
    background: {props => props.theme.colors.gray}
	}

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--white-light);
    -webkit-font-smoothing: antialiased;
  }

`;