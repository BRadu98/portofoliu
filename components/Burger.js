import StyledBurger from "./styles/BurgerStyles";
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen, visible }) => {
  return (
    <>
    {visible && (<StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>)}
    </>

  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
  visible: bool.isRequired,
};

export default Burger;