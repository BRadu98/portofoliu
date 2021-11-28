
import { Link as LinkScroll } from "react-scroll";
import NavStyles from './styles/NavStyles';
import Container from './styles/ContainerStyles';
import { useNav } from '../lib/navState';
import { useOnClickOutside } from '../lib/hooks';
import {useRef} from 'react';
import MobileMenu from './MobileMenu';
import Burger from './Burger';
import DesktopMenu from "./DesktopMenu";



export default function Nav() {
  const { showMobileMenu, setShowMobileMenu, renderMobileNav } = useNav();
  console.log("show mobile menu:",showMobileMenu, "renderMobileNav:",renderMobileNav)
  const node = useRef(); 
  useOnClickOutside(node, () => setShowMobileMenu(false));

  return (
    <NavStyles>
      <Container id="nav-c">
        <LinkScroll className="brand" smooth spy to="home" offset={-170}>Baloi Radu</LinkScroll>
        <DesktopMenu visible={!renderMobileNav}/>
        <Burger open={showMobileMenu} setOpen={setShowMobileMenu} visible={renderMobileNav}/>
        <MobileMenu open={showMobileMenu} setOpen={setShowMobileMenu} visible={renderMobileNav}/>
      </Container>
    </NavStyles>
  );
}
