import React, { useEffect, useState } from "react";

const featuredProjects = ["mass-transit-billing", "go", "gogameconsoles"];

const pinnedExtra = [
  "Admin--6",
  "Travel-Comparison",
  "Vocab-Builder",
  "Celeste-s-Favorite-Places",
  "gogameconsolesupdates",
];

const techMap = {
  "mass-transit-billing": ["Python", "CSV", "OOP"],
  "go": ["Next.js", "Redux", "TypeScript"],
  "gogameconsoles": ["JavaScript", "AI Logic"],
  "travel-comparison": ["React", "Routing"],
  "vocab-builder": ["React", "UI"],
  "celeste-s-favorite-places": ["HTML", "CSS", "Navbar"],
  "gogameconsolesupdates": ["JavaScript", "AI Helper"],
};

const formatRepoTitle = (name) => {
  if (!name) return "";

  if (name.toLowerCase() === "gogameconsolesupdates") {
    return "Go Game Console Updates";
  }

  const cleaned = name
    .replace(/--+/g, " ")
    .replace(/[_]+/g, " ")
    .replace(/-+/g, " ")
    .trim();

  return cleaned
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
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

        // keep only original repos
        const originalRepos = data.filter((repo) => !repo.fork);

        // de-dupe by name (just in case)
        const uniqueRepos = Array.from(
          new Map(originalRepos.map((repo) => [repo.name, repo])).values()
        );

        // exclude repos (case-insensitive)
        const excluded = new Set(["portfolio-website"].map((n) => n.toLowerCase()));
        const cleanedRepos = uniqueRepos.filter(
          (r) => !excluded.has(r.name.toLowerCase())
        );

        // featured + pinned (case-insensitive)
        const lowerFeatured = new Set(featuredProjects.map((n) => n.toLowerCase()));
        const lowerPinned = new Set(pinnedExtra.map((n) => n.toLowerCase()));

        const featured = cleanedRepos
          .filter((r) => lowerFeatured.has(r.name.toLowerCase()))
          .sort(
            (a, b) =>
              featuredProjects.indexOf(a.name.toLowerCase()) -
              featuredProjects.indexOf(b.name.toLowerCase())
          );

        const pinned = cleanedRepos
          .filter((r) => lowerPinned.has(r.name.toLowerCase()))
          .filter((r) => !lowerFeatured.has(r.name.toLowerCase())); // avoid duplicates

        setProjects([...featured, ...pinned]);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="dot-background">
      <h2 className="section-header">Projects</h2>
      <div className="projects-intro">
        <p>  Selected projects demonstrating full-stack development, system design, and AI integration.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => {
          const keyName = project.name.toLowerCase();

          return (
            <div
              className={`project-card ${featuredProjects.includes(keyName) ? "featured" : ""
                }`}
              key={project.id}
            >
              <div>
                <h3>{formatRepoTitle(project.name)}</h3>

                <p>  {project.description ? project.description : "Production-ready application demonstrating clean architecture and scalable design."}
                </p>

                <div className="tech-tags">
                  {(techMap[keyName] || []).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {project.homepage && (
                  <a className="live-btn" href={project.homepage} target="_blank" rel="noopener noreferrer">  Live Demo </a>
                )}

                <a className="code-btn" href={project.html_url} target="_blank" rel="noopener noreferrer"> View Code </a>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="https://github.com/CaterinaE" target="_blank" rel="noopener noreferrer" className="standard-btn"> View All Projects on GitHub →  </a>
      </div>
    </section>
  );
};

export default Projects;