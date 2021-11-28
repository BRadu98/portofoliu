import styled from 'styled-components';

const StyledMobileMenu = styled.div`
  /* background: ${({ theme }) => theme.primaryLight}; */
  background: var(--main);
  box-shadow: 0 0 10px 3px rgba(0,0,0,0.2);
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 70px;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateY(0px)' : 'translateY(calc(-100% - 70px))' }; 

  /* @media (max-width: ${({ theme }) => theme.mobile}) { */
  width:100%;

  ul {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:space-around;
  }
  li {
    padding: 2rem;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    letter-spacing: 0.5rem;
    font-weight: 900;
    background: none;
    border: 0;
    cursor: pointer;
    
    &:hover,
    &:focus {
      color: var(--secondary);
      outline: none;
      text-decoration: none;
    }

  }
`;

export default StyledMobileMenu