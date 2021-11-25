import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: -webkit-sticky;
  position: sticky; */
  top: -5px;
  z-index: 2;
  height: 70px;
  min-height: 70px;
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  padding: 0 1rem;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  

  ul {
    display: flex;
    justify-content: space-around;
    width: fit-content;
    align-items: center;
  }

  a {
    padding: 1rem 2rem;
    color: white;
    white-space: nowrap;
  }

  .brand {
    font-weight: 550;
    padding-top: calc(1rem + 3px);
  }

  .active {
    color: var(--green);
    border-bottom: 4px solid var(--green);
    position: relative;
  }
`;

export default NavStyles