import Backdrop from "./Backdrop"
import StyledModal from "./styles/ModalStyles"
import ReactDOM from "react-dom"
import {motion} from "framer-motion"

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
    }

  },
  exit: {
    y: "100vh",
    opacity: 0,
  }
}

//stop propagation => not closing modal when contents are clicked
const Modal = ({handleClose, children}) => {
  if (process.browser) {
    const portalContainer = document.getElementById('portal');
    return ReactDOM.createPortal(
      <Backdrop onClick={handleClose}>
        <StyledModal
          onClick={(e) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
          <motion.button onClick={handleClose} className="confirm"  
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}> 
            Ok
          </motion.button>
        </StyledModal>
      </Backdrop>,
      portalContainer
    )
  } else {
    return null;
  }
  
}

export default Modal;