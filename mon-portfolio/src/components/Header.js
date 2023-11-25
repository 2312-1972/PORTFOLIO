import React from 'react';
import '../style.css';

const Header = () => {
    return (
      <header className='header'>
        {/* Votre titre stylisé */}
        <h1 className="header-title">Portfolio</h1>
        {/* Navbar */}
        <nav>
          <a href="#presentation">Présentation</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
          <a href='#CV'> Curriculum Vitae</a>
        </nav>
      </header>
    );
  }
  
  export default Header;
