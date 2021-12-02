import Head from 'next/head'
import Home from '../components/Home'
import Projects from '../components/Projects'
import KeyProjects from '../components/KeyProjects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BgTopStyles from '../components/styles/BgTopStyles'
import BgBotStyles from '../components/styles/BgBotStyles'
import TechStack from '../components/TechStack'
import { useModal } from '../lib/modalState'
import Modal from '../components/Modal'

export default function App() {

  const {modalOpen, closeModal, modalContent} = useModal()

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
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={closeModal}>
        {modalContent}
        </Modal>}

    </div>
  )
}
