// import {motion} from "framer-motion"
import Backdrop from "./Backdrop"
import StyledModal from "./styles/ModalStyles"

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
const Modal = ({handleClose, text}) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </StyledModal>
    </Backdrop>
  )
}

export default Modal;