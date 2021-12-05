import styled from 'styled-components';

const HomeStyles = styled.section`
  background:  ${({theme}) => theme.colors.gradient};
  padding: 7rem 0 0 0; //10rem
  color: ${({theme}) => theme.colors.white};
  .name {
    color: ${({theme}) => theme.colors.secondary};
  }
  .fx-row {
    display: flex;
    gap: 1rem;
    @media(max-width: 800px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .w50 {
    margin: 0 auto;
    padding: 0.5rem;
    min-width: 340px;
    @media(min-width: 1500px) {
      min-width: 500px;
    }
  }
  .intro {
    font-size: 2rem;
    display: inline-block;
    font-weight: 700;
    margin-top: 2rem; //?
  }
  .descr {
    display: block;
    margin-top: 1.2rem;
    font-size: 1.5rem;
  }
`;

export default HomeStyles