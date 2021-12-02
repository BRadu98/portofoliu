import ContactStyles from '../components/styles/ContactStyles'
import Container from './styles/ContainerStyles'
import { useModal } from '../lib/modalState'
import { motion } from "framer-motion"
import useForm from '../lib/useForm'

export default function Contact() {


  const { inputs, handleChange, clearForm } = useForm({
    message: '',
    email: '',
    name: '',
  });

  
  const { modalOpen, openModal, closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const msg = e.target.message.value
    console.log("before", modalOpen)

    // console.log(name,email,msg)
  
    modalOpen ? closeModal() : openModal()

    //send msg then
    //const res = 
    clearForm()
   
  }

  //submitconst msg = e.target.message.value;

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
                <input onChange={handleChange} value={inputs.email} type="text" id="email" name="email" placeholder="name@example.com" required className="form-control"/><br/>
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
