import propTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import Nav from './Nav';

const light = {
  colors: {
    main: "#2F2A61",
    mainOpc: "#2F2A61f4",
    secondary: "#5AFF15",
    white: "#fff",
    black: "#000000",
    gradient: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
  }
}

const dark = {
  colors: {
    main: "#FFFB0A",
    mainOpc: "#FFFB0Af4",
    secondary: "#5F0A87",
    white: "#000000",
    black: "#fff",
    gradient: "linear-gradient(to right, rgba(223,255,25,1), rgba(254,255,146,1), rgba(223,255,25,1))",
  }
}

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.white};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
    border-radius: 6px;
    -webkit-border-radius: 6px;
  }

  a:hover,
  a:focus-within {
    cursor: pointer;
    color: ${({theme}) => theme.colors.secondary};
    border-bottom: 4px solid;
  }
  
  .no-border:hover,
  .no-border:focus-within {
    border: none;
  }

  button {
    font-family:  --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h2 {
      font-weight: 700;
      font-size: 3rem;
  }

  ::placeholder {
    font-style: italic;
  }
  .scroll-arrow-btn {
    display: block;
    margin: 1.5rem auto 0 auto;
    width: 4rem;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
    border: none;
    font-size: 2rem;
    border-radius: 50%;
    cursor: pointer;
    /* box-shadow: 0 7px 20px 0 rgb(0 0 0 / 20%), 0 4px 10px 0 rgb(0 0 0 / 20%); */
  }
  .dark-arrow {
    color: ${({theme}) => theme.colors.main};
    background-color: ${({theme}) => theme.colors.white};
  }
  .light-arrow {
    color:${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.main};
  }
  .scroll-arrow:hover,
  .scroll-arrow:focus-within,
  .scroll-arrow span:hover,
  .scroll-arrow span:focus-within {
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.black};
  }

  //User preferences
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* @media (hover) { //fix
  // primary pointing device,to avoid sticky hover on mobile 

  something a:hover,
  something ul li a:focus-within { }
  } */
`;


const InnerStyles = styled.div`
  margin: 0 auto;
`;

export default function Page({ children }) {
  let theme = light;  
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Nav />
        <InnerStyles>{children}</InnerStyles>
      </>
    </ThemeProvider>

  );
}

Page.propTypes = {
  children: propTypes.any,
};
