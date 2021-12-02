import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledModal = styled(motion.div)`
  background-color: var(--secondary);
  position: fixed;
  transform: translate(-50%, -50%);
  width: clamp(50%,700px,90%);
  height: 300px;
  padding: 0 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledModal;