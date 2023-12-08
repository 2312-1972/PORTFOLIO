import React from "react";
import "../style.css";
import projectsData from "../projects.json";

function Project() {
  const projects = projectsData.projects;

  return (
    <div className="back-contact">
      <h3 className="letter-space contact-text p1">
        Projets Passés J'ai eu le privilège de travailler sur une variété de
        projets stimulants, allant de sites web réactifs à des applications
        interactives. Ces expériences ont renforcé ma conviction que le
        développement front-end va bien au-delà du code il s'agit de créer des
        solutions significatives qui améliorent la vie des utilisateurs.
      </h3>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-front">
              <img src={project.image} alt={project.title} className="card-image" />
              <h3 className="card-title">{project.title}</h3>
            </div>
            <div className="card-back">
              <p className="card-description">{project.description}</p>
              <ul className="card-technologies">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
