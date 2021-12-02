import {KeyProjectDetailsStyles} from './styles/KeyProjectsStyles'  
import {motion} from "framer-motion"
const KeyProjectDetails = ({title, stack, description, git, live}) => {
  console.log(live)
  return (
    <KeyProjectDetailsStyles>
      <h2>{title}</h2>
      <h3>{stack}</h3>
      <p>{description}</p>
      <div className="link-Btns">
      {live && !!live && (
        <motion.button 
          className="link-btn"
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          ><a href={live} target="_blank" rel="noreferrer noopener">
            Live
          </a></motion.button>
                )}
      {git && !!git && (
        <motion.button 
          className="link-btn"
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          ><a href={git} target="_blank" rel="noreferrer noopener">
            Code
          </a>
        </motion.button>)}
        </div>
    </KeyProjectDetailsStyles>
  )
}

export default KeyProjectDetails
