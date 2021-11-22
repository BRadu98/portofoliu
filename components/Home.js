import HomeStyles from '../components/styles/HomeStyles'
import Image from 'next/image'
import coding from '../public/coding.png'
import Container from './styles/ContainerStyles';

export default function Home() {
  
  return (
    <HomeStyles>
      <Container>
        <div className="fx-row">
          <div className="w50">
            <div>
              <span className="intro">Hey, I am Radu</span>
              <span className="descr">An Junior Web Developer with a can-do attitude.</span>
            </div>
          </div>
          <div className="w50">
            <div>
              <Image
        src={coding}
        alt="coding"
        layout='responsive'
      />
            </div>
          </div>
        </div>
      </Container>
    </HomeStyles>
  );
}
