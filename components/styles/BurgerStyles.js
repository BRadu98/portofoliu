import styled from 'styled-components';

const StyledBurger = styled.button`
  /* position: absolute; */
  /* top: 17%;
  left: 180px; */
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: 540px) {
    left: 25px;
  }
  
  &:focus {
    outline: none;
  }

  &:hover {
    div {
      background: var(--white);
    }
  }
  
  div {
    width: 1.8rem;
    height: 0.3rem;
    /* background: ${({ theme }) => theme.primaryLight}; */
    background: var(--white); 

    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    /* transform-origin: 1px; */
    transform-origin: -1px;
    
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default StyledBurger;