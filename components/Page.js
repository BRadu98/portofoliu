import propTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Nav from './Nav';

const GlobalStyles = createGlobalStyle`
  :root {
    --main: #2F2A61; //purple
    --secondary: #24ef04; //green
    --white: #fff;
    --black: black;
    --gradient-p: linear-gradient(0deg, rgba(115,57,153,1) 35%, rgba(36,239,4,1) 100%);
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
    border-radius: 6px;
  }

  a:hover,
  a:focus-within {
    cursor: pointer;
    color: var(--secondary);
    border-bottom: 4px solid var(--secondary);
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
    box-shadow: 0 7px 20px 0 rgb(0 0 0 / 20%), 0 4px 10px 0 rgb(0 0 0 / 20%);
  }
  .dark-arrow {
    color: var(--main);
    background-color: var(--white);
  }
  .light-arrow {
    color: var(--white);
    background-color: var(--main);
  }
  .scroll-arrow:hover,
  .scroll-arrow:focus-within,
  .scroll-arrow span:hover,
  .scroll-arrow span:focus-within {
    background-color: var(--secondary);
    color: var(--black);
  }

  //User
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
  /* * * * * * * {
    background-color: red;
  } */
`;


const InnerStyles = styled.div`
  margin: 0 auto;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Nav />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: propTypes.any,
};
