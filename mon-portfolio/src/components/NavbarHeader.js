import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style.css";

const NavbarHeader = () => {
  const location = useLocation();

  // Fonction pour déterminer si un lien est actif
  const isActiveLink = (pathname) => location.pathname === pathname;

  return (
    <nav>
      <div>
        <Link
          className={isActiveLink("/") ? "active-link" : ""}
          style={{
            fontSize: isActiveLink("/") ? "22px" : "18px",
            color: isActiveLink("/") ? "black" : "black",
            textShadow: isActiveLink("/")
              ? "0 0 5px #4fc3f7, 0 0 10px #65c8f7, 0 0 15px #4fc3f7"
              : "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: isActiveLink("/") ? "bold" : "bold",
          }}
          to="/"
        >
          Accueil
        </Link>
      </div>
      <div>
        <Link
          className={isActiveLink("/competences") ? "active-link" : ""}
          style={{
            fontSize: isActiveLink("/competences") ? "22px" : "18px",
            color: isActiveLink("/competences") ? "black" : "black",
            textShadow: isActiveLink("/competences")
              ? "0 0 5px #4fc3f7, 0 0 10px #65c8f7, 0 0 15px #4fc3f7"
              : "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: isActiveLink("/competences") ? "bold" : "bold",
          }}
          to="/competences"
        >
          Compétences
        </Link>
      </div>
      <div>
        <Link
          className={isActiveLink("/projects") ? "active-link" : ""}
          style={{
            fontSize: isActiveLink("/projects") ? "22px" : "18px",
            color: isActiveLink("/projects") ? "black" : "black",
            textShadow: isActiveLink("/projects")
              ? "0 0 5px #4fc3f7, 0 0 10px #65c8f7, 0 0 15px #4fc3f7"
              : "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: isActiveLink("/projects") ? "bold" : "bold",
          }}
          to="/projects"
        >
          Réalisations
        </Link>
      </div>

      <div>
        <Link
          className={isActiveLink("/contact") ? "active-link" : ""}
          style={{
            fontSize: isActiveLink("/contact") ? "22px" : "18px",
            color: isActiveLink("/contact") ? "black" : "black",
            textShadow: isActiveLink("/contact")
              ? "0 0 5px #4fc3f7, 0 0 10px #65c8f7, 0 0 15px #4fc3f7"
              : "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: isActiveLink("/contact") ? "bold" : "bold",
          }}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavbarHeader;
