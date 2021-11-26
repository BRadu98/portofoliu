import React from 'react'
import Image from 'next/image'
import lesperanceKp from '../public/lesperance-kp.png'

const KeyProject = ({project, index}) => {
  return (
    <div className="keyProject">
      <div className="kpImgContainer">
        <Image
          src={lesperanceKp}
          alt="lesperance mock"
          layout='responsive'
          width="320"
          height="640"
        />
      </div>
      <div className="kpDetails">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default KeyProject
