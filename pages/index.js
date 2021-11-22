import Head from 'next/head'
import Home from '../components/Home'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BgTopStyles from '../components/styles/BgTopStyles'
import BgBotStyles from '../components/styles/BgBotStyles'

export default function App() {
  return (
    <div>
      <Head>
        <title>Baloi Radu - Web Developer</title>
        <meta name="description" content="Web Developer Portofolio Website"/>
      </Head>

      <main >
        <Home id="home"></Home>
        <BgBotStyles/>
        
        <About id="about"></About>

        <BgTopStyles/>
        <Projects id="projects"></Projects>
        <BgBotStyles/>

        <BgTopStyles/>
        <Contact id="contact"></Contact>
        <BgBotStyles/>
      </main>

      <Footer/>
      <BgTopStyles/>
    </div>
  )
}
