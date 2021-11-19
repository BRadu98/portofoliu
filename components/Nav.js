
import { Link as LinkScroll } from "react-scroll";
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <LinkScroll class="brand" smooth spy to="home">Baloi Radu</LinkScroll>
      <ul>
        <li>
          <LinkScroll smooth spy to="home" offset={-70}>
            Home
          </LinkScroll>
        </li>
        <li>
          <LinkScroll smooth spy to="about" offset={-70}>
            About
          </LinkScroll>
        </li>
        <li>
          <LinkScroll smooth spy to="projects" offset={-70}>
            Projects
          </LinkScroll>
        </li>
        <li>
          <LinkScroll smooth spy to="contact" offset={-70}>
            Contact
          </LinkScroll>
        </li>
        <li>
          <a href="https://www.cakeresume.com/radu-baloi" target="_blank" rel="noreferrer">Resume</a>
        </li>
      </ul>
    </NavStyles>
  );
}
