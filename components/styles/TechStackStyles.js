import styled from 'styled-components';

const TechStackStyles = styled.section`
  margin: 4rem auto;
  color: var(--main);
  h2 {
      text-align: center;
  }
  .stack-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    min-width: calc(100% - 4rem);
    font-weight: 800;
    margin-bottom: 5rem;
    align-items: center;
    & div:first-child,
    & div:nth-child(2) {
      font-size:1.2rem;
    }
    & div:last-child {
      font-size: 0.8rem;
    }
  }
`;

export default TechStackStyles