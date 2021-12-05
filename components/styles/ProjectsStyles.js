import styled from 'styled-components';

const ProjectsStyles = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background:  ${({theme}) => theme.colors.gradient};
  width: 100%;
  color: ${({theme}) => theme.colors.white};
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
      color: ${({theme}) => theme.colors.secondary};
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
      color: ${({theme}) => theme.colors.white};
      border: 2px solid;
      background: none;
      padding: 0.75rem;
      border-radius: 6px;
      font-weight: 450;
      margin: 0.5rem 0.3rem;
    }
    .filterBtn:focus-within,
    .filterBtn:hover {
      color: ${({theme}) => theme.colors.secondary};
      border-color: ${({theme}) => theme.colors.secondary};;
    }
  }
  .portofolioContainer {
    color: ${({theme}) => theme.colors.white};
    border: 3px solid;
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
      color: ${({theme}) => theme.colors.secondary}; //
      box-shadow: 0 0 5px 5px; //secondary)
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
          background-color: ${({theme}) => theme.colors.main};
          transition:0.5s;
          z-index:1;
          opacity: 95%;
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
            h3 {
              transform: translateY(20px);
              font-size: 1.5rem;
            }     
            h4 {
              margin: 0 auto;
              font-size: 1rem;
            }
            .projectBtnsContianer{
              width: 90%;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              align-items: flex-end;
              a, a:hover, a:focus-within{
                  width:40%;
                  color: ${({theme}) => theme.colors.black};
                  border-bottom: none;
                }
              .projectBtn{
                padding: 0.5rem;
                font-size: 1.1rem;
                border-radius: 6px;
                background: ${({theme}) => theme.colors.secondary};
                color: ${({theme}) => theme.colors.black};
                font-weight: 650;
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