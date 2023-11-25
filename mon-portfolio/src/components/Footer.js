// src/components/Footer.js
import React from 'react';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import '../style.css'
const Footer = () => {
  return (
    <footer id='CV'  className='header'>
      <div className='a'>   
      {/* Icones et liens vers GitHub, YouTube, LinkedIn */}
      <a href="lien-vers-github"><FaGithub style={{fontSize:'30px'}}/></a>
      <a href="lien-vers-youtube"><FaYoutube style={{fontSize:'30px'}}/></a>
      <a href="lien-vers-linkedin"><FaLinkedin style={{fontSize:'30px'}}/></a>
      {/* Lien vers votre CV */}
      <a href="lien-vers-cv" style={{textDecoration:'none', fontSize:'20px'}}> CV</a>
      </div>
    </footer>
  );
};

export default Footer;
