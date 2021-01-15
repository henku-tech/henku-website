import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset-advanced'

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    font-size: 16px;
    --container: 1386px;
    --brand: #4453a6;
    --highlight: #526af2;
    --theme: #5D6494;
    --themeDark: #414771;
    --themeLight: #A9B4F4;
    --deepDark: #292b3d;
    --visited: #5d6494;
    --lightGreen: #e1f25e;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: var(--theme);
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif, "Apple Color Emoji";
    font-weight: 400;
  }

  a {
    transition: color 0.3s;
    
    &:not([class]) {
      text-decoration-skip-ink: auto;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1.875rem;
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  h2 {
    font-size: calc(1.325rem + .7709vw);
  }
  h3 {
    font-size: calc(1.3rem + .6vw);
  }
  h4 {
    font-size: calc(1.275rem + .3vw);
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
  
  ::selection {
    color: #FFF;
    background: var(--highlight);
  }

  // Helpers
  .textCenter {
    text-align: center;
  }

  .mgTop-100 {
    margin-top: 3.75rem;

    @media (min-width: 768px) {
      margin-top: 4rem;
    }

    @media (min-width: 992px) {
      margin-top: 4.725rem;
    }

    @media (min-width: 1200px) {
      margin-top: 6.25rem;
    }
  }

  .highlightInfo {
    text-align: center;
    display: inline-block;
    max-width: 1150px;
    margin: 0 auto;
    padding: 0 1.875rem;
    font-size: calc(1rem + .4vw);
  }

  .gradientHenku {
    background: linear-gradient(#e4e6f1 0%, #FFF 100%);
    
    &.inverse {
      
      background: linear-gradient(#FFF 0%, #e4e6f1 100%);
    }
  }

  .verticalSpacer {
    padding: calc(13vw + 6px) 0;

    @media (min-width: 576px) {
      padding: 5rem 0;
    }

    @media (min-width: 768px) {
      padding: 5.25rem 0;
    }

    @media (min-width: 992px) {
      padding: 6.25rem 0;
    }
    
    @media (min-width: 1200px) {
      padding: 8.25rem 0;
    }
    
    @media (min-width: 1386px) {
      padding: 10rem 0;
    }
  }
`
export default GlobalStyles
