import styled from 'styled-components';

const ContactStyles = styled.section`
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  color: var(--white);

  padding: 2rem;
  .fx-row {
    display: flex;
    
    @media(max-width: 800px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .w50 {
    padding: 1rem;
    min-width: 340px;
    border-radius: 6px;
    @media(min-width: 1000px) {
      width: 450px;
    }
    @media(min-width: 1300px) {
      width: 580px;
    }
    @media(min-width: 1450px) {
      width: 640px;
    }
  }
  .contact-heading {
    background-color: var(--white);
    filter: opacity(0.75);
    color: var(--main);
    margin: 1rem;
    text-align: left;
    font-size: 1.7rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      padding: 2rem 1rem;
      text-align: center;
    }
    div {
      margin: auto;
    }
  }
  .survey-form {
    margin: 0;
    font-size: 1.7rem;
    border-radius: 6px;
    font-weight: 450;
    background-color: var(--white);
    color: var(--main);
    padding: 1rem;
    width: calc(100% - 2rem);
    .form-group,
    .comment-group {
      padding: 0.5rem;
      input,textarea {
        width: calc(100% - 1.75rem); 
        padding: 0.75rem; 
        margin-top: 0.8rem;
        font-size: 1.25rem;
      }
    }
    .submit-button {
      width: 100%;
      font-weight: 450;
      background-color: var(--main);
      color: var(--white);
      border-radius: 6px;
      padding: 1rem;
    }
  }
  
`;

export default ContactStyles