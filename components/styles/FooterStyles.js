import styled from 'styled-components';

const FooterStyles = styled.footer`
  padding-top: 1rem;
  margin-top: 3rem;
  .footer-container-links {
    /* height:80px; */
  }
  button {
    margin: 2.5rem auto;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;

  @media(max-width: 600px) {
    gap: 0.75rem;
  }

  a {
    text-decoration: none;
    padding: 1.5rem;
    transition: transform 0.4s ease-out;
    transition: color 0.3s ease-out;
    transition: background-color 0.3s ease-out;
    margin: 6px;
    text-align: center;
    width: 8ch;
  }
  a:hover,
  a:focus-within {
    color: var(--black);
    background-color: var(--secondary);
    transform: translateY(5px);
    border-bottom: none;
  }

`;

export default FooterStyles