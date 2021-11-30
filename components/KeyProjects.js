import KeyProjectsStyles from './styles/KeyProjectsStyles'
import {projectsArray} from '../projectsArray';
import KeyProject from './KeyProject';

export default function KeyProjects() {
  
  return (
    <KeyProjectsStyles id="key-projects">
      <div className="kps-heading"><h2>Key Projects</h2></div>
      <div className="kps-container">
      {projectsArray.filter(project => project.important).map((project) => <KeyProject key={project.name} project={project} />)}
      </div>
    </KeyProjectsStyles>

  );
}
