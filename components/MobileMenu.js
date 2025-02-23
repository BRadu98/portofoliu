import StyledMobileMenu from "./styles/MobileMenuStyles";
import { bool, func } from 'prop-types';
import { Link as LinkScroll } from "react-scroll";


const MobileMenu = ({open, visible}) => {
  return (
    <>
    {visible && (<StyledMobileMenu open={open}>
      <ul>
          <li>
            <LinkScroll activeClass="active" smooth spy to="key-projects" offset={-150}>
              Key Projects
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" smooth spy to="projects" offset={-165}>
              All Projects
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" smooth spy to="contact" offset={-165}>
              Contact
            </LinkScroll>
          </li>
          <li>
            <a href="/Baloi-Radu-CV.pdf" target="_blank" rel="noreferrer noopener">Resume</a>
          </li>
        </ul>
    </StyledMobileMenu>)}
    </>
    
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
  visible: bool.isRequired,
}

export default MobileMenu;