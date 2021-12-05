//! Hybrid of a Component(Provider) and Custom Hook
import { createContext, useContext, useState } from 'react';

// 1. Provider (state+func)
const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function ModalStateProvider({ children }) {
 
  //Modal
  const [modalOpen, setModalOpen] = useState(false)
  const closeModal = () => setModalOpen(false)
  const openModal = () => setModalOpen(true)
  const [modalContent, setModalContent] = useState(<h3 style={{fontWeight:450, fontSize: 23, }}>The message has been sent</h3>);

  //Theme
  let darkmode
  if (typeof window !== "undefined") { 
    darkmode = localStorage.getItem('darkmode')
  }

  const [lightmode, setLightmode] = useState(!!darkmode)

  // Returned - exposed to local state
  return (
    <LocalStateProvider
      value={{
        modalOpen,
        closeModal,
        openModal,
        modalContent,
        setModalContent,
        lightmode, 
        setLightmode,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// Make a custom hook for accesing the local state
function useModal() {
  // ?In a custom hook -> when u need to access the  data you simply use this instead of importing useContext and the context itself
  // 2. Consumer - talks to the provider without a direct link
  const all = useContext(LocalStateContext);
  return all;
}

export { ModalStateProvider, useModal };

//! stick this into _app.js(and it will persist from page to page) or a page
