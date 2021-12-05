import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }


  //style to avoid flash
  render() {
    return (
      <Html lang="en-EN">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
        <style dangerouslySetInnerHTML={{__html: `
          html {background: #fff}
          body #__next div {visibility: hidden}
          body.loaded #__next div {visibility: visible}`}}>
        </style>

      </Head>
        <body>
          <Main />
          <NextScript />
          <div id="portal" />
        </body>
      </Html>
    );
  }
}
