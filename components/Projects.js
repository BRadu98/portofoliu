import ProjectsStyles from '../components/styles/ProjectsStyles'
import Container from './styles/ContainerStyles';
import { useState } from 'react';
import {projectsArray} from '../projectsArray';


export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("web")

  return (
    <ProjectsStyles id="projects">
      <Container>
        <div className="portofolio-heading">
          <h2>All Projects</h2>
          <p><code>Use the buttons to sort through the projects</code></p>
        </div>
      </Container>
      <Container>
      <div className="filterBtnsContainer">
        <button id="web" className="filterBtn" type="button">Websites</button>
        <button id="apps" className="filterBtn" type="button">Apps</button>
        <button id="all" className="filterBtn" type="button">Show All</button>
        <button id="none" className="filterBtn" type="button">Hide All</button>
        </div>
      </Container>
      <div className="portofolioContainer">
        {projectsArray.filter(project => project.category === selectedCategory).map(project => <div key={project.name}>{project.name}</div>)}
      </div>
    </ProjectsStyles>
  );
}
