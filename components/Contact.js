import ContactStyles from '../components/styles/ContactStyles'
import Container from './styles/ContainerStyles';


export default function Contact() {
  
  return (
    <ContactStyles id="contact">
      <Container>
        <div className="fx-row">
          <div className="w50 contact-heading">
            <div>
            <p>Wanna hire me or just connect about an idea or opportunity?</p>
            <p>Drop me a line - I&apos;d love to talk.</p>
            </div>
          </div>
          <div className="w50">
            <form className="survey-form">
            <div className="form-group">
              <label id="name-label" htmlFor="name">Name</label><br/>
              <input type="text" id="name" name="name" placeholder="Name" required  className="form-control"/><br/>
            </div>
            <div className="form-group">
              <label id="email-label" htmlFor="email">Email</label><br/>
              <input type="text" id="email" name="email" placeholder="name@example.com" required className="form-control"/><br/>
            </div>

            <div className="comment-group">
              <label id="comments-label" htmlFor="comments">Message</label><br/>
              <textarea id="comments" className="input-textarea" name="comment" placeholder="" rows="5"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" id="submit" className="submit-button"> Submit </button>
            </div>
          </form>
        </div>
      </div>
        
  </Container>
    </ContactStyles>
  );
}
