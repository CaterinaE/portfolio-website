import React, { useEffect, useState } from "react";

const featuredProjects = [
  "mass-transit-billing",
  "go",
  "gogameconsoles"
];

const techMap = {
  "mass-transit-billing": ["Python", "CSV", "OOP"],
  "go": ["Next.js", "Redux", "TypeScript"],
  "gogameconsoles": ["JavaScript", "AI Logic"],
  "Admin--6": ["React", "Admin UI"]
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/CaterinaE/repos"
        );
        const data = await response.json();
  
        // Remove forks (optional but professional)
        const originalRepos = data.filter(repo => !repo.fork);
  
        // Remove duplicates by name (extra safety)
        const uniqueRepos = Array.from(
          new Map(originalRepos.map(repo => [repo.name, repo])).values()
        );
  
        // Sort featured projects to top
        const sortedRepos = uniqueRepos.sort((a, b) => {
          const aFeatured = featuredProjects.includes(a.name) ? 0 : 1;
          const bFeatured = featuredProjects.includes(b.name) ? 0 : 1;
          return aFeatured - bFeatured;
        });
  
        setProjects(sortedRepos);
  
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
  
    fetchProjects();
  }, []);

  return (
    <section className="dot-background">
      <h2 id="about-header">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className={`project-card ${
              featuredProjects[0] === project.name ? "featured" : ""
            }`}
            key={project.id}
          >
            <div>
              <h3>{project.name}</h3>

              <p>
                {project.description
                  ? project.description
                  : "Production-ready application demonstrating clean architecture and scalable design."}
              </p>

              <div className="tech-tags">
                {(techMap[project.name] || []).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              {project.homepage && (
                <a
                  className="live-btn"
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >   Live Demo  </a>
              )}
              <a
                className="code-btn"
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              > View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;;
