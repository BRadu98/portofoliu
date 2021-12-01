import HomeStyles from '../components/styles/HomeStyles'
import Image from 'next/image'
import coding from '../public/coding.png'
import Container from './styles/ContainerStyles';
import { Link as LinkScroll } from "react-scroll";


export default function Home() {
  
  return (
    <HomeStyles id="home">
      <Container>
        <div className="fx-row">
          <div className="w50">
            <div>
              <span className="intro">Hey,&nbsp;&nbsp;I&apos;m Radu</span>
              <span className="descr">A Web Developer with a can-do attitude.</span>
            </div>
          </div>
          <div className="w50">
            <div>
              <Image
        src={coding}
        alt="coding"
        layout='responsive'
        priority="true"
      />
            </div>
          </div>
        </div>
      </Container>
      <Container>
      <LinkScroll smooth spy to="projects" offset={-170} className="no-border"><button className='scroll-arrow-btn dark-arrow scroll-arrow' aria-label='down-arrow'><i className="fa fa-arrow-down" aria-hidden="true"></i>
        </button></LinkScroll>
      </Container>
    </HomeStyles>
  );
}
