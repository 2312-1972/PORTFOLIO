import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style.css";

// On crée un tableau avec les informations de nos liens
const navLinks = [
  { path: "/", label: "Accueil" },
  { path: "/competences", label: "Compétences" },
  { path: "/projects", label: "Réalisations" },
  { path: "/partenaire", label: "Partenaire" },
  { path: "/contact", label: "Contact" },
];

const NavbarHeader = () => {
  const location = useLocation();
  const isActiveLink = (pathname) => location.pathname === pathname;

  return (
    <nav>
      {/* On utilise .map() pour créer un lien pour chaque élément du tableau */}
      {navLinks.map((link) => {
        const isActive = isActiveLink(link.path);
        return (
          <div key={link.path}>
            <Link
              className={`cursor-target ${isActive ? "active-link" : ""}`}
              style={{
                fontSize: isActive ? "22px" : "18px",
                color: "black",
                textShadow: isActive
                  ? "0 0 5px #4fc3f7, 0 0 10px #65c8f7, 0 0 15px #4fc3f7"
                  : "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontWeight: "bold",
              }}
              to={link.path}
            >
              {link.label}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default NavbarHeader;