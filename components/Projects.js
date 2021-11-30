import ProjectsStyles from '../components/styles/ProjectsStyles'
import Container from './styles/ContainerStyles';
import { useState } from 'react';
import {projectsArray, categories} from '../projectsArray';
import Project from './Project';


export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  function onFBClick(e) { 
    setSelectedCategory(e.target.id)
  }

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
        {categories.map(category => <button key={category[0]} id={category[0]} className="filterBtn" type="button" onClick={onFBClick}>{category[1]}</button>)}
        </div>
      </Container>
      {selectedCategory !== "none" && <div className="portofolioContainer">
      {projectsArray.filter(project => {
        return selectedCategory==="all" || project.category === selectedCategory}).map((project, index) => <Project key={project.name} project={project} type={index % 3}/>)}
      </div>}

    </ProjectsStyles>
  );
}
