import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
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
    return (
      <Html lang="en-EN">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://kit.fontawesome.com/0bae28e39f.js" crossOrigin="anonymous"></Script> 
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
