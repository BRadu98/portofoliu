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
    margin: 1.5rem auto;
    min-width: 300px;
    max-width: 1000px;
    width: 80vw;
    align-self: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 2.5rem;
    gap: 2rem;
    place-items: center;
    @media(max-width: 768px) { 
       padding: 2rem 1rem;
    }
    @media(max-width: 1205px) { 
       max-width: 650px;
    } 
    @media(max-width: 790px) { 
       max-width: 320px;
    }
    


    .card {
      width: 300px;
      height: 300px;
      border-radius: 10px;
      box-shadow: 0 0 5px 5px var(--secondary);
      overflow: hidden;
      .content{
        width:100%;
        height:100%;
        position:relative;
        overflow:hidden;
        .back {
          height: 300px; //FIX
        }
        .back-from-left {
          top:0;
          left:-100%;
          background-color: red;
        }
        .back-from-bottom {
          background-color: blue;
        }
        .back-from-right {
          background-color: green;
        }
     }
     &:hover .content {
       .back-from-left {
         left:0;
         transform: translateY(-100%); //FIX
       }
       .back-from-bottom {
        top:0%;
       }
       .back-from-right {
        right:0;
       }
     }
    }

    
  }
`;

export default ProjectsStyles