import Container from './styles/ContainerStyles';
import FooterStyles from './styles/FooterStyles';

export default function Footer() {
  
  return (
    <FooterStyles>
      <Container>Other links: github linkedin</Container>
      <Container><button className='scroll-arrow-btn light-arrow'><span>&#8593;</span></button></Container>
    </FooterStyles>
  );
}
