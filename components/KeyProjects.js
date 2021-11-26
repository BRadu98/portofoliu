import KeyProjectsStyles from './styles/KeyProjectsStyles'
import {projectsArray} from '../projectsArray';
import KeyProject from './KeyProject';
import Container from './styles/ContainerStyles'

export default function KeyProjects() {
  
  return (
    <KeyProjectsStyles id="key-projects">
      <div className="kps-heading"><h2>Key Projects</h2></div>
      <div className="kps-container">
      {projectsArray.filter(project => project.important).map((project, index) => <KeyProject key={project.name} project={project} index={index}/>)}
      </div>
    </KeyProjectsStyles>

  );
}
