import styled from 'styled-components';

const BgTopStyles = styled.section`
  display: block;
  box-sizing: border-box;
  height: 100px;
  background:  ${({theme}) => theme.colors.gradient};
  clip-path: ellipse(63% 100% at 50% 100%);
`;

export default BgTopStyles