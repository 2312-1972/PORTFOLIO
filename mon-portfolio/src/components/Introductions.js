// src/components/Introduction.js
import React from 'react';
import { animated } from 'react-spring';

const Introduction = ({ style }) => {
  return (
    <animated.section id="presentation" style={style}>
      {/* Vos informations de présentation */}
      <h2>Présentation</h2>
      <p>Enthousiaste et motivé développeur...</p>
    </animated.section>
  );
};

export default Introduction;
