import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import '../style.css';

// 1. On crée un tableau avec les informations des liens
const socialLinks = [
  { href: 'https://github.com/2312-1972', label: 'GitHub', Icon: FaGithub, isExternal: true },
  { href: 'https://www.linkedin.com/in/frederic-t-283ab24b/', label: 'LinkedIn', Icon: FaLinkedin, isExternal: true },
  { href: 'https://discord.gg/2Bb6kV8K', label: 'Discord', Icon: FaDiscord, isExternal: true },
  { href: '/contact', label: 'Contact', Icon: FaEnvelope, isExternal: false }, // Lien interne
];

const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const visits = localStorage.getItem('visitCount') || 0;
    const updatedVisits = parseInt(visits) + 1;
    localStorage.setItem('visitCount', updatedVisits);
    setVisitCount(updatedVisits);
  }, []);

  const linkStyle = { fontSize: '26px' };

  return (
    <footer id='CV' className='back-footer'>
      <div className='a'>
        {/* 2. On utilise .map() pour créer les liens dynamiquement */}
        {socialLinks.map((link) => {
          const { href, label, Icon, isExternal } = link;
          
          if (isExternal) {
            // 3. On utilise <a> pour les liens externes
            return (
              <a 
                key={label}
                href={href} 
                aria-label={label} 
                style={linkStyle}
                className="cursor-target" // <-- Ajout de la classe pour le curseur
                target="_blank" // Ouvre dans un nouvel onglet
                rel="noopener noreferrer" // Sécurité pour les liens externes
              >
                <span className="sr-only">{label}</span>
                <Icon />
              </a>
            );
          }
          
          // Et <Link> pour les liens internes
          return (
            <Link 
              key={label}
              to={href} 
              aria-label={label} 
              style={linkStyle}
              className="cursor-target" // <-- Ajout de la classe pour le curseur
            >
              <span className="sr-only">{label}</span>
              <Icon />
            </Link>
          );
        })}
      </div>
      <h4 style={{ fontSize: '14px', color: 'white', width: 'auto', fontFamily: 'oxygen', fontWeight: '300' }}>
        ©2025 Frédéric TOPPAN, Tous droits réservés
      </h4>

      <div className="visit-counter">
        <p>Visitors : {visitCount}</p>
      </div>
    </footer>
  );
};

export default Footer;