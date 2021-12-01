import React from 'react'
import Image from 'next/image'
//

const KeyProject = ({project}) => {
  return (
    <div className="keyProject">
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
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default KeyProject