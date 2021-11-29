import Image from 'next/image'

      
const Project = ({project}) => {
  return (
    <div>
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
