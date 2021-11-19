import Head from 'next/head'
import HomeStyles from '../components/styles/HomeStyles'
import AboutStyles from '../components/styles/AboutStyles'
import ProjectsStyles from '../components/styles/ProjectsStyles'
import ContactStyles from '../components/styles/ContactStyles'
import BgTopStyles from '../components/styles/BgTopStyles'
import BgBotStyles from '../components/styles/BgBotStyles'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baloi Radu - Web Developer</title>
        <meta name="description" content="Web Developer Portofolio Website"/>
      </Head>

      <main >
        <HomeStyles id="home">Hey Im Radu</HomeStyles>
        <BgBotStyles/>
        



        <AboutStyles id="about">ABOUT ME</AboutStyles>


        <BgTopStyles/>
        <ProjectsStyles id="projects">PROJECTS</ProjectsStyles>
        <BgBotStyles/>

        <BgTopStyles/>
        <ContactStyles id="contact">CONTACT</ContactStyles>
        <BgBotStyles/>
      </main>

      <footer>
          Other links: github linkedin
      </footer>
      <BgTopStyles/>
    </div>
  )
}
