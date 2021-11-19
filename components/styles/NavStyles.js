import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: -5px;
  z-index: 2;
  height: 70px;
  min-height: 70px;
  width: calc(100% - 1.5rem);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  padding: 0 1rem;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);

  ul {
    display: flex;
    justify-content: space-around;
    width: fit-content;
  }

  a {
    padding: 1rem 2rem;
    color: white;
  }

  .brand {
    font-weight: 550;
  }
`;

export default NavStyles