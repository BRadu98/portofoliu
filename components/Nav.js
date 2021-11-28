
import { Link as LinkScroll } from "react-scroll";
import NavStyles from './styles/NavStyles';
// import { useNav } from '../lib/navState';
import { useOnClickOutside } from '../lib/hooks';
import {useRef} from 'react';
import MobileMenu from './MobileMenu';
import Burger from './Burger';
import DesktopMenu from "./DesktopMenu";

import { useState, useEffect } from 'react';

function useWindowDimensions() {
  let height = process.browser ? window.innerHeight : 360
  let width =  process.browser ? window?.innerWidth : 360

  const [dimension, setDimension] = useState([width,height]);

  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      if (window) {
        setDimension([window?.innerWidth, window?.innerHeight]);
      } else {
        console.log("noooo")
      }
     
    }, 100); 
    window?.addEventListener('resize', debouncedResizeHandler);
    return () => window?.removeEventListener('resize', debouncedResizeHandler);
  }, []); //! Note this empty array. this effect should run only on mount and unmount
  return dimension;
}

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default function Nav() {
  // const { showMobileMenu, setShowMobileMenu, renderMobileNav } = useNav();
 
  const node = useRef(); 
  useOnClickOutside(node, () => setShowMobileMenu(false));
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [renderMobileNav, setRenderMobileNav] = useState(false)

  let windowWidth = 0;
  let windowHeight = 0;
  [windowWidth,windowHeight] = useWindowDimensions()
    useEffect(() => {
    if(process.browser) {
      setRenderMobileNav(windowWidth < 1200)
      setShowMobileMenu(false)
    }
  },[windowWidth])
  console.log("show mobile menu:",showMobileMenu, "renderMobileNav:",renderMobileNav)
  return (
    <NavStyles>
      <div id="nav-c">
        <LinkScroll className="brand" smooth spy to="home" offset={-170}>Baloi Radu</LinkScroll>
        <div id="fgrow"></div>
        <DesktopMenu visible={!renderMobileNav}/>
        <Burger open={showMobileMenu} setOpen={setShowMobileMenu} visible={renderMobileNav}/>
        <MobileMenu open={showMobileMenu} setOpen={setShowMobileMenu} visible={renderMobileNav}/>
      </div>
    </NavStyles>
  );
}
