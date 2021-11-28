import React from 'react'
import { bool } from 'prop-types';
import { Link as LinkScroll } from "react-scroll";
import StyledDesktopMenu from "./styles/DesktopMenuStyles";


const DesktopMenu = ({ visible }) => {
  return (
    <>
      {visible && (<StyledDesktopMenu>
        <ul>
          <li>
            <LinkScroll activeClass="active" smooth spy to="key-projects" offset={-165}>
              Key Projects
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" smooth spy to="projects" offset={-165}>
              All Projects
            </LinkScroll>
          </li>
          <li>
            <LinkScroll activeClass="active" smooth spy to="contact" offset={-170}>
              Contact
            </LinkScroll>
          </li>
          <li>
            <a href="https://www.cakeresume.com/radu-baloi" target="_blank" rel="noreferrer noopener">Resume</a>
          </li>
        </ul>
      </StyledDesktopMenu>
        
      )}
    </>
  )
}

DesktopMenu.propTypes = {
  visible: bool.isRequired,
}

export default DesktopMenu
