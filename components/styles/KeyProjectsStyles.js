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
     width: 320px;
     @media(max-width: 400px) {
        width:240px;
      }
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
    .kpDetails {
      h4 {
        color: var(--main);
        margin-top: 0;
        margin-bottom: 0;
        min-height: 50px;
      }
      .detailsBtn {
        font-weight:450;
        background-color: var(--main);
        color: var(--white);
        border-radius: 6px;
        padding: 1rem;
        width: 200px;
        margin-top:1rem;
      }
    }

  }
`;

export const KeyProjectDetailsStyles = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  line-height: 1.3rem;
  h2 {
    line-height: 2.8rem;
  }
  h2,h3 {
    color: var(--main);
    text-align: center;
  }
  p {
    text-align: center;
    color: var(--black);
    overflow-y: scroll;
    max-height: 100px;
  }
  .link-Btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    flex-wrap: wrap;
    width: 100%; //80%
    a,
    a:hover,
    a:focus-within {
      color: var(--white);
      border-bottom: none;
    }
  }
  .link-btn {
    font-weight:450;
    margin: 1rem;
    background-color: var(--main);
    color: var(--white);
    border-radius: 6px;
    padding: 1rem;
    width: 200px;
    min-width: 120px;
    /* margin-top: 20px; */
  }
`