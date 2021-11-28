import Page from "../components/Page"
import Script from 'next/script'
import {SSRProvider} from '@react-aria/ssr'; //!Fix class name diff
import { NavStateProvider } from '../lib/navState'; //!UseContext




function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NavStateProvider>
        <Page>
        <Script src="https://kit.fontawesome.com/0bae28e39f.js" crossOrigin="anonymous"></Script> 
        <Component {...pageProps} />
      </Page>
      </NavStateProvider>
    </SSRProvider>

  )
}

export default MyApp
