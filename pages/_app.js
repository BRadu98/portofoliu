import Page from "../components/Page"
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Script src="https://kit.fontawesome.com/0bae28e39f.js" crossOrigin="anonymous"></Script> 
      <Component {...pageProps} />
    </Page>
  )
}

export default MyApp
