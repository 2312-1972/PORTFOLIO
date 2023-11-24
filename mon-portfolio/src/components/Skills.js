// src/components/Skills.js
import React from 'react';
import { animated } from 'react-spring';

const Skills = ({ style }) => {
  return (
    <animated.section id="competences" style={style}>
      {/* Vos compétences en langages, frameworks, etc. */}
      <h2>Compétences</h2>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        {/* Ajoutez d'autres compétences ici */}
      </ul>
    </animated.section>
  );
};

export default Skills;
