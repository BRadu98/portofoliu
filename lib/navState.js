//! Hybrid of a Component(Provider) and Custom Hook

import { createContext, useContext, useEffect, useState } from 'react';
import { useWindowDimensions } from './useWindowDimensions';

// 1. Provider (state+func)
const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function NavStateProvider({ children }) {
  //custom provider  
  // const [showModal, setShowModal] = useState(false);
  // const handleCloseModal = () => setShowModal(false);
  // const handleShowModal = () => setShowModal(true);
  // const [modalTitle, setModalTitle] = useState("");
  // const [modalBody, setModalBody] = useState("");

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [renderMobileNav, setRenderMobileNav] = useState(false)

  //Render appropiate nav
  let windowWidth = 0;
  let windowHeight = 0;
  if(process.browser) { 
    [windowWidth,windowHeight] = useWindowDimensions()
  }
  useEffect(() => {
  if(process.browser) {
    setRenderMobileNav(windowWidth < 1200)
    setShowMobileMenu(false)
  }
  },[windowWidth])

  // Returned - exposed to local state
  return (
    <LocalStateProvider
      value={{
        // showModal,
        // handleCloseModal,
        // handleShowModal,
        // modalTitle,
        // modalBody,
        // setModalTitle,
        // setModalBody,
        showMobileMenu,
        setShowMobileMenu,
        renderMobileNav, 
        setRenderMobileNav,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// Make a custom hook for accesing the local state
function useNav() {
  // ?In a custom hook -> when u need to access the cart data you simply use this instead of importing useContext and the context itself
  // 2. Consumer - talks to the provider without a direct link
  const all = useContext(LocalStateContext);
  return all;
}

export { NavStateProvider, useNav };

//! stick this into _app.js(and it will persist from page to page) or a page
