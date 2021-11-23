
import { Link as LinkScroll } from "react-scroll";
import NavStyles from './styles/NavStyles';
import Container from './styles/ContainerStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Container>
        <LinkScroll className="brand" smooth spy to="home" offset={-170}>Baloi Radu</LinkScroll>
        <ul>
          <li>
            <LinkScroll activeClass="active" smooth spy to="about" offset={-150}>
              About
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" smooth spy to="projects" offset={-170}>
              Projects
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" smooth spy to="contact" offset={-170}>
              Contact
            </LinkScroll>
          </li>
          <li>
            <a href="https://www.cakeresume.com/radu-baloi" target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>
      </Container>
    </NavStyles>
  );
}
