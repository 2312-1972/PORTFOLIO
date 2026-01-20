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
            return (
              <a 
                key={label}
                href={href} 
                aria-label={label} 
                style={linkStyle}
                className="cursor-target" 
                target="_blank" 
                rel="noopener noreferrer" 
              >
                <span className="sr-only">{label}</span>
                <Icon />
              </a>
            );
          }
          
          return (
            <Link 
              key={label}
              to={href} 
              aria-label={label} 
              style={linkStyle}
              className="cursor-target" 
            >
              <span className="sr-only">{label}</span>
              <Icon />
            </Link>
          );
        })}
      </div>

      <h4 style={{ fontSize: '14px', color: 'white', width: 'auto', fontFamily: 'oxygen', fontWeight: '300', marginBottom: '15px' }}>
        ©2025 Frédéric TOPPAN, Tous droits réservés
      </h4>

      {/* --- BANNIÈRE PARTENAIRE DANS LE FOOTER --- */}
      <div style={{ marginBottom: '20px' }}>
        {/* START ADVERTISER: Northwest Registered Agent LLC from awin.com */}
        <a 
          rel="sponsored noopener noreferrer" 
          href="https://www.awin1.com/cread.php?s=4429014&v=66946&q=573884&r=2736078"
          target="_blank"
          className="cursor-target"
        >
          <img 
            src="https://www.awin1.com/cshow.php?s=4429014&v=66946&q=573884&r=2736078" 
            border="0" 
            alt="Northwest Registered Agent"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
          />
        </a>
        {/* END ADVERTISER: Northwest Registered Agent LLC from awin.com */}
      </div>

      <div className="visit-counter">
        <p>Visitors : {visitCount}</p>
      </div>
    </footer>
  );
};

export default Footer;