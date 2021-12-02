import Head from 'next/head'
import Home from '../components/Home'
import Projects from '../components/Projects'
import KeyProjects from '../components/KeyProjects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BgTopStyles from '../components/styles/BgTopStyles'
import BgBotStyles from '../components/styles/BgBotStyles'
import TechStack from '../components/TechStack'

export default function App() {

  return (
    <div>
      
      <Head>
        <title>Baloi Radu - Web Developer</title>
        <meta name="description" content="Web Developer Portofolio Website"/>
      </Head>
    
      <main >
        <Home/>
        <BgBotStyles/>
        
        <KeyProjects />

        <BgTopStyles/>
        <Projects/>
        <BgBotStyles/>

        <TechStack/>

        <BgTopStyles/>
        <Contact/>
        <BgBotStyles/>
      </main>

      <Footer/>
      <BgTopStyles/>

    </div>
  )
}
