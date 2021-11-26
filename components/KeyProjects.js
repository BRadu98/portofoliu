import KeyProjectsStyles from './styles/KeyProjectsStyles'
import Container from './styles/ContainerStyles';
import {projectsArray} from '../projectsArray';
import KeyProject from './KeyProject';

export default function KeyProjects() {
  
  return (
    <KeyProjectsStyles id="key-projects">
      <div className="kps-heading"><h2>Key Projects</h2></div>
      {projectsArray.filter(project => project.important).map(project => <KeyProject key={project.name} project={project}/>)}
    </KeyProjectsStyles>
  );
}
