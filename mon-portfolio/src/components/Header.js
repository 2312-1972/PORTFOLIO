//src/components/Header.js
import React from 'react';
import { animated } from 'react-spring';
import './style.css';

const Header = ({ style }) => {
  return (
    <animated.header style={style}>
      {/* Votre logo animé */}
      <div className="logo">Logo</div>
      <h1>PORTFOLIO</h1>
      {/* Navbar avec les liens vers différentes sections */}
      <nav style={{color:'black', fontFamily:'Roboto'}}>
        <a href="#presentation">Présentation</a>
        <a href="#competences">Compétences</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </animated.header>
  );
};

export default Header;
