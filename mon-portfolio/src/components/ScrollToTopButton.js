// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../style.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100); // Ajustez la valeur selon votre préférence
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
    <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
