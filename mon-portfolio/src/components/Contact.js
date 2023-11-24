// src/components/Contact.js
import React from 'react';
import { animated } from 'react-spring';

const Contact = ({ style }) => {
  return (
    <animated.section id="contact" style={style}>
      {/* Formulaire de contact */}
      <h2>Contact</h2>
      {/* Intégration du formulaire de contact ici */}
    </animated.section>
  );
};

export default Contact;
