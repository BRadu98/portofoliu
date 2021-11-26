import styled from 'styled-components';

const ProjectsStyles = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  width: 100%;
  color: white;
  .portofolio-heading {
    text-align: center;
    margin-top: -40px;
    display: block;
    width: 100;
    p {
      margin-top: -20px;
      margin-bottom: 30px
    }
    code {
      color: var(--secondary);
      word-wrap: break-word;
      font-weight: 500;
      font-size: 1.15rem;
    }
  }
  .filterBtnsContainer {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    .filterBtn {
      color: white;
      border: 2px solid var(--white);
      background: none;
      padding: 0.75rem;
      border-radius: 6px;
      font-weight: 450;
      margin: 0.5rem 0.3rem;
    }
    .filterBtn:focus-within,
    .filterBtn:hover {
      color: var(--secondary);
      border-color: var(--secondary);
    }
  }
  .portofolioContainer {
    border: 3px solid var(--white);
    border-radius: 6px;
    height: 800px;
    min-width:340px;
    margin: 1.5rem auto;
    align-self: center;
    display: grid;
  }
`;

export default ProjectsStyles