import styled from 'styled-components';

const KeyProjectsStyles = styled.section`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .kps-container {
    max-width: 1400px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 430px);
    grid-gap: 5px;
    @media(max-width: 900px) {
    max-width: 340px;
  }
   }
   .keyProject {
     margin: 0.5rem auto;
     text-align: center;
     /* width: 100%; */
     padding: 2rem;
    .kps-heading {
        margin-top: 3rem;
    }
    h3 {
      color: var(--main);
      margin-top: 0.70rem;
    }
    .kpImgContainer {
      
    }
    .kpDetails {
    
    }
  }



`;

export default KeyProjectsStyles