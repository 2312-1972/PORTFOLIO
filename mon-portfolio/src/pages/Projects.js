// src/components/Project.js

import React from "react";
import { Link } from "react-router-dom"; // <-- MODIFICATION 1 : Importation de Link
import "../style.css";
import projectsData from "../projects.json";

function Project() {
  const projects = projectsData.projects;

  return (
    <div className="back-contact ">
      <h3
        className="letter-space contact-text intro-resp skills-h3 "
        
      >
        J'ai eu le privilège de travailler sur une variété de projets
        stimulants, allant de sites web réactifs à des applications
        interactives. Ces expériences ont renforcé ma conviction que le
        développement front-end va bien au-delà du code il s'agit de créer des
        solutions significatives qui améliorent la vie des utilisateurs.
      </h3>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-front">
              {project.future && (
                <p className="in-progress-text">In Progress</p>
              )}
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
              />
              <img
                src={project.logo}
                className="card-title"
                alt={project.title}
              />
            </div>
            <div className="card-back">
              <p  className="card-description">{project.description}</p>
              <ul className="card-technologies">
                {project.technologies.map((tech) => (
                  <li key={tech.name}>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="tech-icon"
                    />
                  </li>
                ))}
              </ul>
              <div style={{display:'flex', gap:'20px'}}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/2447911.webp"
                    alt="GitHub"
                    className="github-link"
                    />
                  </a>
                  
                  {/* --- MODIFICATION 2 : Logique conditionnelle pour le lien du site --- */}
                  {project.future === true ? (
                    // Si le projet est "future", on utilise Link vers la nouvelle page
                    <Link to="/en-deploiement">
                      <img
                        src="/images/worldwide.webp"
                        alt="Link website"
                        className="website-link"
                      />
                    </Link>
                  ) : (
                    // Sinon, on utilise le lien externe normal
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/worldwide.webp"
                        alt="Link website"
                        className="website-link"
                      />
                    </a>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;