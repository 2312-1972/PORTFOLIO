import React from 'react';
import { Link} from 'react-router-dom';
import '../style.css';

const NavbarHeader = () => {
    return (
  
        <nav  style={{borderBottom:'1px solid white', justifyContent:'flex-end'}}>
          <Link style={{fontSize:'18px'}} to="#presentation">A propos</Link>
          <Link style={{fontSize:'18px'}}to="#competences">Compétences</Link>
          <Link style={{fontSize:'18px'}}to="/projects">Projets</Link>
          <Link style={{fontSize:'18px'}}to="/contact">Contact</Link>
        </nav>
     
    );
  }
  
  export default NavbarHeader;