import Image from 'next/image'

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
          objectFit="cover"
        />
      )}
        </div>
        <div className={`back back-from-${direction}`}>

        </div>
      </div>
    </div>
  )
}

export default Project
