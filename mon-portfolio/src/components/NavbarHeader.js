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
            color: isActiveLink('/') ? '#65c8f7' : 'black',
            textShadow: isActiveLink('/') ? '':'' ,
            fontWeight: isActiveLink('/') ? 'bold' : 'normal',
          }}to="/">Acceuil</Link>
          </div> 
           <div>   
          <Link style={{
          fontSize: isActiveLink('/projects') ? '22px' : '18px',
          color: isActiveLink('/projects') ? '#65c8f7' : 'black',
          textShadow: isActiveLink('/projects') ? '':'' ,
          fontWeight: isActiveLink('/projects') ? 'bold' : 'normal',
        }}to="/projects">Réalisations</Link>
          </div>
          <div>  
          <Link style={{
        fontSize: isActiveLink('/competences') ? '22px' : '18px',
        color: isActiveLink('/competences') ? '#65c8f7' : 'black',
        textShadow: isActiveLink('/competences') ? '':'' ,
        fontWeight: isActiveLink('/competences') ? 'bold' : 'normal',
        }}to="/competences">Compétences</Link>
          </div> 
          <div>   
          <Link style={{
            fontSize: isActiveLink('/contact') ? '22px' : '18px',
            color: isActiveLink('/contact') ? '#65c8f7' : 'black',
            textShadow: isActiveLink('/contact') ? '':'' ,
        fontWeight: isActiveLink('/contact') ? 'bold' : 'normal',
        }}to="/contact">Contact</Link>
        </div>
       
        </nav>
     
    );
  }

  
  export default NavbarHeader;
           