// src/components/Projects.js
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch GitHub repositories
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/CaterinaE/repos');
        const data = await response.json();
        setProjects(data); // Set fetched data to state
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
     
      <h2>Projects</h2>
      
      <div className="column">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description ? project.description : 'No description available'}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
