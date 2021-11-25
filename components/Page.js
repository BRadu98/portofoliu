import propTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Nav from './Nav';

const GlobalStyles = createGlobalStyle`
  :root {
    --main: #f20408;
    --green: #24ef04;
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
    color: var(--green);
    border-bottom: 4px solid var(--green);
  }
  
  .no-border:hover,
  .no-border:focus-within {
    border: none;
  }

  button {
    font-family:  --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h1 {
    color: green;
  }
  ::placeholder {
  font-style: italic;
  }
  .scroll-arrow-btn {
    display: block;
    margin: 3rem auto 2rem;
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
    color: #2F2A61;
    background-color: #fff;
  }
  .light-arrow {
    color: #fff;
    background-color: #2F2A61;
  }
  .scroll-arrow:hover,
  .scroll-arrow:focus-within,
  .scroll-arrow span:hover,
  .scroll-arrow span:focus-within {
    background-color: var(--green);
    color: black;
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

  /* @media (hover) {
  // primary pointing device,to avoid sticky hover on mobile 

  something a:hover,
  something ul li a:focus-within { }
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
