import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style.css';

const NavbarHeader = () => {
  const location = useLocation();

  // Fonction pour déterminer si un lien est actif
  const isActiveLink = (pathname) => location.pathname === pathname;

  return (
    <nav >
      <div>
        <Link
          className={isActiveLink('/') ? 'active-link' : ''} 
          style={{
            fontSize: isActiveLink('/') ? '22px' : '18px',
            color: isActiveLink('/') ? '#65c8f7' : 'black',
            textShadow: isActiveLink('/') ? '' : '',
            fontWeight: isActiveLink('/') ? 'bold' : 'bold',
          }}
          to="/"
        >
          Acceuil
        </Link>
      </div>
      <div>
        <Link
          className={isActiveLink('/competences') ? 'active-link' : ''}
          style={{
            fontSize: isActiveLink('/competences') ? '22px' : '18px',
            color: isActiveLink('/competences') ? '#65c8f7' : 'black',
            textShadow: isActiveLink('/competences') ? '' : '',
            fontWeight: isActiveLink('/competences') ? 'bold' : 'bold',
          }}
          to="/competences"
        >
          Compétences
        </Link>
      </div>
      <div>
        <Link
          className={isActiveLink('/projects') ? 'active-link' : ''}
          style={{
            fontSize: isActiveLink('/projects') ? '22px' : '18px',
            color: isActiveLink('/projects') ? '#65c8f7' : 'black',
            textShadow: isActiveLink('/projects') ? '' : '',
            fontWeight: isActiveLink('/projects') ? 'bold' : 'bold',
          }}
          to="/projects"
        >
          Réalisations
        </Link>
      </div>
     
      <div>
        <Link
          className={isActiveLink('/contact') ? 'active-link' : ''}
          style={{
            fontSize: isActiveLink('/contact') ? '22px' : '18px',
            color: isActiveLink('/contact') ? '#65c8f7' : 'black',
            textShadow: isActiveLink('/contact') ? '' : '',
            fontWeight: isActiveLink('/contact') ? 'bold' : 'bold',
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
