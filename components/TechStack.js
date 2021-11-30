import Container from '../components/styles/ContainerStyles';
import TechStackStyles from './styles/TechStackStyles';

const TechStack = () => {
  return (
    <TechStackStyles>
      <h2>Stack</h2>
      <Container className="stack-container">
        <div>nextJS</div>
        <div>reactJS</div>
        <div>expressJS</div>
        <div>nodeJS</div>
        <div>javascript</div>
        <div>html5</div>
        <div>css3</div>
        <div>graphql</div>
        <div>mongodb</div>
        <div>postgresql</div>
        <div>keystoneJS</div>
        <div>python3</div>
        <div>git</div>
        <div>swift</div>
      </Container>
    </TechStackStyles>
  )
}

export default TechStack
