import styled from 'styled-components';

const HomeStyles = styled.section`
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  padding: 6rem 0 0 0; //10rem
  width: 100vw;
  height: 100%;
  color: #fff;

  .fx-row {
    display: flex;
    gap: 1rem;
  }
  .w50 {
    min-width: 340px;
  }
  .intro {
    font-size: 2rem;
    display: inline-block;
    font-weight: 700;
  }
  .descr {
    display: block;
    margin-top: 1.2rem;
    font-size: 1.5rem;
  }
`;

export default HomeStyles