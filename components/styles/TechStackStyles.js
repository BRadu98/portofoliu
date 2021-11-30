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
    min-width: calc(100% - 1.5rem);
    font-weight: 800;
    margin-bottom: 5rem;
    & div:first-child,
    & div:nth-child(2) {
      font-size:1.2rem;
    }
  }
`;

export default TechStackStyles