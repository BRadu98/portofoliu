import Container from './styles/ContainerStyles';
import FooterStyles, { FooterLinks } from './styles/FooterStyles';
import { Link as LinkScroll } from "react-scroll";


export default function Footer() {
  
  return (
    <FooterStyles id="footer">
      <Container className="footer-container-links">
        <FooterLinks>
          <a href="https://github.com/BRadu98" target="_blank"  rel="noreferrer noopener" className="light-arrow"><i className="fab fa-github"></i> Github</a>
          <a href="/Baloi-Radu-CV.pdf" target="_blank" rel="noreferrer noopener" className="light-arrow"><i className="fas fa-file-pdf"></i> CV</a>
          <a href="https://www.linkedin.com/in/radu-baloi-543301156/" target="_blank" rel="noreferrer noopener" className="light-arrow"><i className="fab fa-linkedin"></i> Linkedin</a>
        </FooterLinks>
      </Container>
      <Container>
      <LinkScroll  smooth spy to="home" offset={-170} className="no-border"><button className='scroll-arrow-btn light-arrow scroll-arrow' aria-label='up-arrow'><i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button></LinkScroll>
      </Container>
    </FooterStyles>
  );
}
