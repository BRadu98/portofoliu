import styled from 'styled-components';

const FooterStyles = styled.footer`
  padding-top: 1rem;
  margin-top: 3rem;
  height: 250px;
  .footer-container-links {
    height:80px;
  }
`;

export const FooterLinks = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  gap: 2rem;

  a {
    text-decoration: none;
    padding: 1.5rem;
    transition: transform 0.4s ease-out;
    margin: 6px;
    text-align: center;
  }
  a:hover,
  a:focus-within {
    color: var(--black);
    background-color: var(--secondary);
    transform: translateY(5px);
  }

`;

export default FooterStyles