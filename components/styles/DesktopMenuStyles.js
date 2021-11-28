import styled from 'styled-components';

const StyledDesktopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  top: -5px;
  z-index: 2;
  padding: 0;
  /* box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%); */
  

  ul {
    display: flex;
    justify-content: space-around;
    width: fit-content;
    align-items: center;
    gap:1rem;
  }


`;

export default StyledDesktopMenu