import ContactStyles from '../components/styles/ContactStyles'
import Container from './styles/ContainerStyles'
import { useModal } from '../lib/modalState'
import { motion } from "framer-motion"
import useForm from '../lib/useForm'

export default function Contact() {


  const { inputs, handleChange, resetForm } = useForm({
    message: '',
    email: '',
    name: '',
  });

  
  const { modalOpen, openModal, closeModal, setModalContent } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.dir(inputs)
    // const name = e.target.name.value
    // const email = e.target.email.value
    // const msg = e.target.message.value
    
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setModalContent(<h3 style={{ fontWeight:450, fontSize: 23 }}>The message has been sent</h3>);
        resetForm()
      } else {
        console.log('Response - anything else')
        setModalContent(<h3 style={{ fontWeight:450, fontSize: 23 , color:'red' }}>There was an error, the message was not sent</h3>);
      }
    }).then(() => modalOpen ? closeModal() : openModal())
    
   
  }

  return (
    <ContactStyles id="contact">
      <Container><h2>Contact Me</h2></Container>
      <Container>
        <div className="fx-row">

          <div className="w50 contact-heading">
            <div>
            <p>Wanna hire me or just connect about an idea or opportunity?</p>
            <p>Drop me a line - I&apos;d love to talk.</p>
            </div>
          </div>

          <div className="w50">
            <form className="survey-form" onSubmit={handleSubmit}>
              <fieldset>
              <div className="form-group">
                <label id="name-label" htmlFor="name">Name</label><br/>
                <input onChange={handleChange} value={inputs.name} type="text" id="name" name="name" placeholder="Name" required  className="form-control"/><br/>
              </div>
              <div className="form-group">
                <label id="email-label" htmlFor="email">Email</label><br/>
                <input onChange={handleChange} value={inputs.email} type="email" id="email" name="email" placeholder="name@example.com" required className="form-control"/><br/>
              </div>
              <div className="message-group">
                <label id="comments-label" htmlFor="comments">Message</label><br/>
                <textarea onChange={handleChange} value={inputs.message} id="message" className="input-textarea" name="message" placeholder="" rows="5" required ></textarea>
              </div>

            <div className="form-group">
              <motion.button type="submit" id="submit" className="submit-button"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
              > 
              Send
              </motion.button>
            </div>
            </fieldset>
          </form>
        </div>
      </div>
        
  </Container>
    </ContactStyles>
  );
}
