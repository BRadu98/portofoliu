import Image from 'next/image'

// type -> index % 3

const Project = ({project, type}) => {
  return (
    <div className="card">
      <div className="content">
        <div className="front">

        </div>
        <div className={`back-${type}`}>

        </div>
      </div>
    
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
  )
}

export default Project
