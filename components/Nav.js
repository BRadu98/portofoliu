
import { Link as LinkScroll } from "react-scroll";
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <LinkScroll smooth spy to="home">
            HOME
          </LinkScroll>
        </li>
        <li>
          <LinkScroll smooth spy to="about">
            ABOUT
          </LinkScroll>
        </li>
        <li>
          <LinkScroll smooth spy to="projects">
            PROJECTS
          </LinkScroll>
        </li>
        <li>
          <LinkScroll smooth spy to="contact">
            CONTACT
          </LinkScroll>
        </li>
        <li>
          <a href="https://www.cakeresume.com/radu-baloi" target="_blank" rel="noreferrer">RESUME</a>
        </li>
      </ul>
    </NavStyles>
  );
}
