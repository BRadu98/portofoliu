import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getStaticProps({ renderPage }) {
    //! fixing css class names being different on server and client
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    //fontawesome icons
    //style to avoid flash
    return (
      <Html lang="en-EN">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {<style dangerouslySetInnerHTML={{__html: `
          html {background: #fff}
          body #__next div {visibility: hidden}
          body.loaded #__next div {visibility: visible}`}}>
        </style>}
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
