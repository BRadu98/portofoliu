import propTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Nav from './Nav';

const GlobalStyles = createGlobalStyle`
  :root {
    --gradient-bg-light: linear-gradient(to right, rgba(223,255,25,1), rgba(254,255,146,1), rgba(223,255,25,1));
    --main2: #FFFB0A;
    --secondary2: #5F0A87;
    --white2: black;
    --black2: #fff;
    --mainOpc2: #FFFB0Af4;

    /* --main: var(--main2); 
    --mainOpc: var(--mainOpc2); 
    --secondary: var(--secondary2); 
    --white: var(--white2); 
    --black: var(--black2); 
    --gradient-bg: var(--gradient-bg-light); */

    --main: #2F2A61; //purple
    --mainOpc: #2F2A61f4;
    --secondary: #5AFF15; //green
    --white: #fff;
    --black: black;
    --gradient-bg: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  }

  html, body {
    background-color: var(--white);
    color: var(--white);
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
    /* box-shadow: 0 7px 20px 0 rgb(0 0 0 / 20%), 0 4px 10px 0 rgb(0 0 0 / 20%); */
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
