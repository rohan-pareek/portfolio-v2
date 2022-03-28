import React from 'react';
import ProjectCard from '../components/project-card';
import projects from '../data/projects.json';

const Projects = (props) => {
  return (
    <div className='mt-10 lg:ml-10'>
      {projects.map((project, index) => (
        <ProjectCard
          key={`${project.name}-${index}`}
          name={project.name} 
          gitUrl={project.github}
          liveUrl={project.site}
          description={project.description}
          techstack={project.technologies}
          personal={project.personal}
        />
      ))}
    </div>
  )
}

export default Projects;