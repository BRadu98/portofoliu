import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledModal = styled(motion.div)`
  background-color: var(--white);
  position: fixed;
  transform: translate(-50%, -50%);
  width: clamp(50%,700px,70%);
  min-height: 250px;
  padding: 0 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .confirm {
    position: fixed;
    font-weight:450;
    background-color: var(--main);
    color: var(--white);
    border-radius: 6px;
    padding: 1rem;
    width: 200px;
    bottom: 30px;
  }
`;

export default StyledModal;