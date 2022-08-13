import "./Projects.css";
import projects from "../assets/projects.json";

function Projects() {
  return (
    <>
      <div className="projects-section">
        <div className="projects-wrapper">
          <div className="projects-heading-wrapper">
            <h1 className="projects-heading">My Projects</h1>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <h1 className="project-title">{project.title}</h1>
                <p className="project-description">{project.description}</p>
                <img
                  className="project-image"
                  src={project.url}
                  alt={project.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
