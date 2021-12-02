import Image from 'next/image'
import { motion } from "framer-motion"

// type -> index % 3

const Project = ({project, type}) => {
  let direction
  switch(type){
    case 0:
      direction = "left"
      break;
    case 1:
      direction = "bottom"
      break
    case 2:
      direction = "right"
      break;
  }

  const stack = project.stack.join(" | ")
  const git = project.gitLink
  const live = project.liveLink
  
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          {project.image && (
        <Image
          src={project.image[Object.keys(project.image)[0]].src}
          alt={project.name}
          width={300} 
          height={300}
          layout="responsive"
          objectFit="fill"
        />
      )}
        </div>
        <div className={`back back-from-${direction}`}>
           <div className="project-details">
              <h3>{project.name}</h3>
              <h4>{stack}</h4>
              <div className="projectBtnsContianer">
                {live && !!live && (
                  <a href={live} target="_blank" rel="noreferrer noopener">
                    <motion.button 
                      className="projectBtn"
                      whileHover={{scale:1.1}}
                      whileTap={{scale:0.9}}
                      >
                        Live
                    </motion.button>
                  </a>
                )}
                {git && !!git && (
                  <a href={live} target="_blank" rel="noreferrer noopener">
                    <motion.button 
                      className="projectBtn"
                      whileHover={{scale:1.1}}
                      whileTap={{scale:0.9}}
                      >
                        Code
                    </motion.button>
                  </a>
                )}
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Project
