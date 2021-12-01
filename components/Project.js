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

  let stack = project.stack.join(" | ")
  let git = project.gitLink
  let live = project.liveLink
  
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
              <h4>{project.name}</h4>
              <h5>{stack}</h5>
              <div className="projectBtnsContianer">
                {live && !!live && (
                  <button className="projectBtn"><a href={live} target="_blank" rel="noreferrer noopener">Live</a></button>
                )}
                {git && !!git && (
                  <button className="projectBtn"><a href={git} target="_blank" rel="noreferrer noopener">Code</a></button>
                )}
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Project
