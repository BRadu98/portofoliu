import Head from 'next/head'
import HomeStyles from '../components/styles/HomeStyles'
import AboutStyles from '../components/styles/AboutStyles'
import ProjectsStyles from '../components/styles/ProjectsStyles'
import ContactStyles from '../components/styles/ContactStyles'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Baloi Radu - Web Developer</title>
        <meta name="description" content="Web Developer Portofolio Website"/>
      </Head>

      <main >
        <HomeStyles id="home">Hey Im Radu</HomeStyles>



        <AboutStyles id="about">ABOUT ME</AboutStyles>



        <ProjectsStyles id="projects">PROJECTS</ProjectsStyles>



        <ContactStyles id="contact">CONTACT</ContactStyles>
      </main>

      <footer>
          Other links: github linkedin
      </footer>
    </div>
  )
}
