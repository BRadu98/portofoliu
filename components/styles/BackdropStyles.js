import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1000;
  height: 100%;
  width: 100%;
  background: var(--mainOpc);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledBackdrop;