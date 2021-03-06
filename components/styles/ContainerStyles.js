import styled from 'styled-components';

const Container = styled.div`
  /* width: 100vw; */
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.75rem;
  padding-left: 0.75rem;  //FIX PADDING?
  display: flex;
  justify-content:center;

  @media(min-width: 1400px) {
    max-width: 1320px;
  }
  @media(min-width: 1200px) {
    max-width: 1140px;
  }
  @media(min-width: 992px) {
    max-width: 960px;
  }
  @media(min-width: 768px) {
    max-width: 720px;
  }
  @media(min-width: 576px) {
    max-width: 540px;
  }
`;

export default Container