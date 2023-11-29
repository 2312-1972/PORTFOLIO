import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import '../style.css';

const NavbarHeader = () => {
  const location = useLocation();

  // Fonction pour déterminer si un lien est actif
  const isActiveLink = (pathname) => location.pathname === pathname;
    return (
  
        <nav className='back-Nav' style={{gap:"100px"}} >
          <div>      
          <Link style={{
            fontSize: isActiveLink('/') ? '22px' : '18px',
            color: isActiveLink('/') ? '#00bfff' : 'white',
            fontWeight: isActiveLink('/') ? 'bold' : 'normal',
          }}to="/">Acceuil</Link>
          </div> 
           <div>   
          <Link style={{
          fontSize: isActiveLink('/projects') ? '22px' : '18px',
          color: isActiveLink('/projects') ? '#00bfff' : 'white',
          fontWeight: isActiveLink('/projects') ? 'bold' : 'normal',
        }}to="/projects">Projets</Link>
          </div>
          <div>  
          <Link style={{
        fontSize: isActiveLink('/competences') ? '22px' : '18px',
        color: isActiveLink('/competences') ? '#00bfff' : 'white',
        fontWeight: isActiveLink('/competences') ? 'bold' : 'normal',
        }}to="/competences">Compétences</Link>
          </div> 
          <div>   
          <Link style={{
            fontSize: isActiveLink('/contact') ? '22px' : '18px',
            color: isActiveLink('/contact') ? '#00bfff' : 'white',
        fontWeight: isActiveLink('/contact') ? 'bold' : 'normal',
        }}to="/contact">Contact</Link>
          </div>
        </nav>
     
    );
  }

  
  export default NavbarHeader;
           