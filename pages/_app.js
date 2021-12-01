import Page from "../components/Page"
import Script from 'next/script'
import { SSRProvider } from '@react-aria/ssr'; //!Fix class name diff
import { NavStateProvider } from '../lib/navState'; //!UseContext
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  if (process.browser) {
    document.body.classList.add("loaded")
}  
  //pwa
  //fontawesome icons
  return (
    <SSRProvider>
      <NavStateProvider>
      
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#2F2A61"/>
      </Head>
      <Page>
        <Script src="https://kit.fontawesome.com/0bae28e39f.js" crossOrigin="anonymous"></Script> 
        <Component {...pageProps} />
      </Page>
      </NavStateProvider>
    </SSRProvider>

  )
}

export default MyApp
