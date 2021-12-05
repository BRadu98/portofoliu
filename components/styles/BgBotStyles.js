import styled from 'styled-components';

const BgBotStyles = styled.section`
  display: block;
  box-sizing: border-box;
  height: 100px;
  background:  ${({theme}) => theme.colors.gradient};
  clip-path: ellipse(55% 100% at 50% 0%);
`;

export default BgBotStyles

