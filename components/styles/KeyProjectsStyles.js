import styled from 'styled-components';

const KeyProjectsStyles = styled.section`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .kps-container {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
   }
   .keyProject {
     /* background-color: grey; */
     margin: 1rem auto;
     display: flex;
     width: max(340px,50%);
     gap: 3rem;
     padding: 2rem;
     flex-wrap: wrap;
    .kps-heading {
        margin-top: 3rem;
    }
    .kpImgContainer {
      flex:1;
    }
    .kpDetails {
      flex:1;
    }
  }



`;

export default KeyProjectsStyles