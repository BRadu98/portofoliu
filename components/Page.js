import propTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Nav from './Nav';

const GlobalStyles = createGlobalStyle`
  :root {
    --maxWidth: 2250px;
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
  }

  a:hover {
    cursor: pointer;
    color: var(--green);
    border-bottom: 4px solid var(--green);
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
  section {
    /* height: 100vh; */
  }
`;

const InnerStyles = styled.div`
  /* max-width: var(--maxWidth); */
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
