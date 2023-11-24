// src/components/Header.js
import React from 'react';
import { animated } from 'react-spring';

const Header = ({ style }) => {
  return (
    <animated.header style={style}>
      {/* Votre logo animé */}
      <div className="logo">Logo</div>
      
      {/* Navbar avec des liens vers différentes sections */}
      <nav>
        <a href="#presentation">Présentation</a>
        <a href="#competences">Compétences</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </animated.header>
  );
};

export default Header;
