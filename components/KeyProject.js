import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
import { useModal } from '../lib/modalState'
import KeyProjectDetails from './KeyProjectDetails'

const KeyProject = ({project}) => {

  const {modalOpen, openModal, setModalContent} = useModal()

  const stack = project.stack.join(" | ")

  const handleClick = () => {
    setModalContent(<KeyProjectDetails 
      title={project.name}
      stack={stack}
      description={project.description}
      git={project.gitLink}
      live={project.liveLink}
      ></KeyProjectDetails>)
    !modalOpen && openModal()
  }

  return (
    <div className="keyProject">
      <h3>{project.name}</h3>
      <div className="kpImgContainer">
        {project.mockImage && (
          <Image
          src={project.mockImage[Object.keys(project.mockImage)[0]].src}
          alt="lesperance mock"
          width={275}
          height={550}
         />
        )}
      </div>
      <div className="kpDetails">
        <h4>{stack}</h4>
        <motion.button onClick={handleClick} className="detailsBtn"  
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}> 
            Details
          </motion.button>
      </div>
    </div>
  )
}

export default KeyProject