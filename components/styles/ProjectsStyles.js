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
          position:absolute;
          width:100%;
          height:100%;
          background-color: var(--main);
          transition:0.5s;
          z-index:1;
          opacity: 85%;
          text-align: center;
          .project-details {
            display: flex;
            flex-direction: column;
            padding: 0 1.5rem;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            gap: 2rem;     
            & > * {
              height: 50px;
            }     
            h5 {
              margin: 0 auto;
            }
            .projectBtnsContianer{
              width: 90%;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              align-items: flex-end;
              .projectBtn{
                padding: 0.5rem;
                border-radius: 6px;
                background: var(--secondary);
                color: black;
                font-weight: 450;
                width: 40%;
              }
            }
          }
        }
        .back-from-left {
          top:0;
          left:-100%;
        }
        .back-from-bottom {
          top:100%;
          left:0;
        }
        .back-from-right {
          top:0%;
          right:-100%;         
        }
     }
     &:hover .content {
       .back-from-left {
        left:0;
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