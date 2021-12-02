
import StyledBackdrop from './styles/BackdropStyles';

const Backdrop = ({children, onClick}) => {
  return (
    <StyledBackdrop
      className="backdrop"
      onClick={onClick}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >
        {children}
    </StyledBackdrop>
  )
}

export default Backdrop
