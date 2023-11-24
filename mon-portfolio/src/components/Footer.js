// src/components/Footer.js
import React from 'react';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* Icones et liens vers GitHub, YouTube, LinkedIn */}
      <a href="lien-vers-github"><FaGithub /></a>
      <a href="lien-vers-youtube"><FaYoutube /></a>
      <a href="lien-vers-linkedin"><FaLinkedin /></a>
      {/* Lien vers votre CV */}
      <a href="lien-vers-cv">Télécharger CV</a>
    </footer>
  );
};

export default Footer;
