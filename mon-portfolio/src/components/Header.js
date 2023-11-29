import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import '../style.css';
import backHeader from '../images/wepik-export-20231129141019ssb6.webp';

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

        // Attend 1 seconde avant de recommencer
        setTimeout(() => {
          setTypedText('');
          index = 0;
          isDeleting = false;
          // Recommence l'animation
          intervalId = setInterval(intervalFunction, 100);
        }, 1000);
      }
    };

    intervalId = setInterval(intervalFunction, 100);

    return () => clearInterval(intervalId);
  }, []);

  const getTitleAndText = useCallback(() => {
    switch (location.pathname) {
      case '/':
        return { pageTitle: 'Bienvenue', animationText: '..sur mon Portfolio..' };
      case '/projects':
        return { pageTitle: 'Voici', animationText: '..mes projets réalisés..' };
      case '/contact':
        return { pageTitle: 'Vous', animationText: '..pouvez me laisser un message !!..' };
      default:
        return { pageTitle: 'Bienvenue', animationText: '..sur mon Portfolio..' };
    }
  }, [location.pathname]);

  useEffect(() => {
    const { animationText } = getTitleAndText();
    const cleanup = startTyping(animationText);

    return cleanup;
  }, [getTitleAndText, startTyping]);

  return (
    <header className="header" style={{ background: { backHeader } }}>
      <div className="menu">
        <h3 style={{ fontFamily: 'Dancing Script', fontSize: '40px', color: 'white' }}>
          {getTitleAndText().pageTitle}
        </h3>
        <h3 style={{ fontFamily: 'Dancing Script', fontSize: '40px', color: 'white' }}>{typedText}</h3>
      </div>
    </header>
  );
};

export default Header;
