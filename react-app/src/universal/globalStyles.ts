import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color--primary: #2C3C46;
    --color--primary-hover:#405765;
    --color--secondary: #D1B800;
    --color--secondary-hover: #D1B800;
    --color--third: #2C3C46;
    --color--third-hover: #2C3C46;
    --color--light: #FFFFFF;
    --color--light-hover: #FFFFF0;
    --color--light-hover--dark: #999999;
    --color--dark: #181D2F;
    --color--dark-hover: #181D2F;
    --color--shadow: #DAE1F0;
    --box--shadow:  rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    --border-radius: .5em;
    --max--section--width: 80em;
    --min--section--height: 20em;
    --color--white--transparent: rgba(255, 255, 255, 0.5);
    --margin-small: 10px;
    --margin-medium: 15px;
    --margin-large: 20px;
    --margin-xl: 50px;
    --font-small: 16px;
    --font-medium: 20px;
    --font-large: 24px;
    --min-section-height: 90vh;

  }

`;

export default GlobalStyle;
