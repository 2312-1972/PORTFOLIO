import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import '../style.css';
import Logo from "../images/Shenzor.webp"



const Header = () => {
  const [typedText, setTypedText] = useState('');
  const location = useLocation();

  const startTyping = useCallback((targetText) => {
    let index = 0;
    let isDeleting = false;
    let intervalId;

    const intervalFunction = () => {
      const currentText = targetText.slice(0, index);
      setTypedText(currentText);

      if (isDeleting) {
        index--;
      } else {
        index++;
      }

      if (index === targetText.length + 1) {
        isDeleting = true;
        index--;
      }

      if (index === 0 && isDeleting) {
        isDeleting = false;
        clearInterval(intervalId);

       
        setTimeout(() => {
          setTypedText('');
          index = 0;
          isDeleting = false;
          // Recommence l'animation
          intervalId = setInterval(intervalFunction, 120);
        }, 100);
      }
    };

    intervalId = setInterval(intervalFunction, 120);

    return () => clearInterval(intervalId);
  }, []);

  const getTitleAndText = useCallback(() => {
    switch (location.pathname) {
      case '/':
        return { pageTitle: '', animationText: "Bienvenue sur mon portfolio" };
      case '/projects':
        return { pageTitle: '', animationText: 'Mes dernières réalisations' };
      case '/competences':
        return { pageTitle: '', animationText: ' Mes compétences' };
      case '/contact':
        return { pageTitle: '', animationText: "N'hésitez pas à me contacter" };
      default:
        return { pageTitle: '', animationText: 'Bienvenue sur mon Portfolio' };
    }
  }, [location.pathname]);

  useEffect(() => {
    const { animationText } = getTitleAndText();
    const cleanup = startTyping(animationText);

    return cleanup;
  }, [getTitleAndText, startTyping]);

  return (
    <header className="header">
    <div className="logo-container">
      <img src={Logo} alt='logo' className='logo'/>
    </div>
    <div className="menu">
      <h3 className='h3-animation'>
        {getTitleAndText().pageTitle}
      </h3>
      <h3 className='h3-animation'>{typedText}</h3>
    </div>
  </header>
  );
};

export default Header;
