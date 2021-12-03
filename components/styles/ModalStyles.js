import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledModal = styled(motion.div)`
  background-color: var(--white);
  position: fixed;
  transform: translate(-50%, -50%);
  width: clamp(50%,700px,70%);
  min-height: 250px;
  /* max-height: 95%; */
  padding: 0 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  .confirm {
    justify-self: flex-end;
    font-weight:450;
    background-color: var(--main);
    color: var(--white);
    border-radius: 6px;
    padding: 1rem;
    width: 200px;
    margin-bottom: 2rem;
  }
`;

export default StyledModal;