import styled from 'styled-components';

const KeyProjectsStyles = styled.section`
    margin: 1.5rem auto 5rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .kps-container {
    max-width: 1400px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 340px);
    grid-gap: 2.5rem;
    @media(max-width: 715px) {
      max-width: 340px;
    }
   }
   .keyProject {
     margin: 1rem auto;
     text-align: center;
     max-width: 250px;
     padding: 1.5rem;
     /* border: 4px solid var(--main); */
     box-shadow: 0 0 5px 4px var(--main);
     border-radius: 6px;
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