import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import '../style.css';

const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Récupérer le compteur depuis le localStorage
    const visits = localStorage.getItem('visitCount') || 0;
    const updatedVisits = parseInt(visits) + 1;

    // Mettre à jour le compteur dans le localStorage
    localStorage.setItem('visitCount', updatedVisits);

    // Mettre à jour l'état
    setVisitCount(updatedVisits);
  }, []);

  return (
    <footer id='CV' className='back-footer'>
      <div className='a'>
        <Link to={'https://github.com/2312-1972'} aria-label="GitHub" style={{ fontSize: '26px' }}>
          <span className="sr-only">GitHub</span>
          <FaGithub />
        </Link>
        <Link to={'https://www.linkedin.com/in/frederic-t-283ab24b/'} aria-label="LinkedIn" style={{ fontSize: '26px' }}>
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin />
        </Link>
        <Link to={'https://discord.gg/2Bb6kV8K'} aria-label="Discord" style={{ fontSize: '26px' }}>
          <span className="sr-only">Discord</span>
          <FaDiscord />
        </Link>
        <Link to={'./contact'} aria-label="Contact" style={{ fontSize: '26px' }}>
          <span className="sr-only">Contact</span>
          <FaEnvelope />
        </Link>
      </div>
      <h4 style={{ fontSize: '14px', color: 'white', width: 'auto', fontFamily: 'oxygen', fontWeight: '300' }}>
        ©2023 Frédéric TOPPAN, Tous droits réservés
      </h4>

      {/* Afficher le compteur de visites */}
      <div className="visit-counter">
        <p>Visitors : {visitCount}</p>
      </div>
    </footer>
  );
};

export default Footer;
