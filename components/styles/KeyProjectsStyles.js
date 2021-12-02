import styled from 'styled-components';

export const KeyProjectsStyles = styled.section`
    margin: 1.5rem auto 5rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .kps-container {
      max-width: 1400px;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(100px, 380px));
      grid-gap: 2rem;
      @media(max-width: 715px) {
        max-width: 340px;
      }
      @media(max-width: 1000px) {
        max-width: 700px;
      }
    }
   .keyProject {
     margin: 1rem auto;
     text-align: center;
     padding: 1.5rem;
     box-shadow: 0 0 5px 4px var(--main);
     border-radius: 6px;
     overflow-wrap: break-all;
     .kpImgContainer {
      max-width: 275px;
      max-height: 550px;
      margin: 0 auto;
     } 
    .kps-heading {
        margin-top: 3rem;
    }
    h3 {
      color: var(--main);
      margin-top: 0;
      margin-bottom: 0.2rem;
    }
    h4 {
      color: var(--main);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

export const KeyProjectDetailsStyles = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  line-height: 1.5rem;
  h2,h3 {
    color: var(--main);
  }
  .link-Btns {
    display: flex;
    justify-content: space-around;
    width: 80%;
    a,
    a:hover,
    a:focus-within {
      color: white;
      border-bottom: none;
    }
  }
  .link-btn {
    font-weight:450;
    background-color: var(--main);
    color: var(--white);
    border-radius: 6px;
    padding: 1rem;
    width: 200px;
    margin-bottom: 80px;
    margin-top: 20px;
  }
`