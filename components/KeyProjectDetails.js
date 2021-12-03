import {KeyProjectDetailsStyles} from './styles/KeyProjectsStyles'  
import {motion} from "framer-motion"
const KeyProjectDetails = ({title, stack, description, git, live}) => {
  return (
    <KeyProjectDetailsStyles>
      <h2>{title}</h2>
      <h3>{stack}</h3>
      <p>{description}</p>
      <div className="link-Btns">
      {live && !!live && (
        <a href={live} target="_blank" rel="noreferrer noopener">
        <motion.button 
          className="link-btn"
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >
            Live
          </motion.button>
          </a>
                )}
      {git && !!git && (
        <a href={git} target="_blank" rel="noreferrer noopener"><motion.button 
          className="link-btn"
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >
            Code
        </motion.button>
        </a>)}
        </div>
    </KeyProjectDetailsStyles>
  )
}

export default KeyProjectDetails
