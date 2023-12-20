import React from 'react';
import '../animations/animation-sphere.css';

const OrbAnimation = () => {
  return (
    <div className="wrap">
      {[...Array(400)].map((_, index) => (
        <div key={index} className="c"></div>
      ))}
    </div>
  );
};

export default OrbAnimation;
