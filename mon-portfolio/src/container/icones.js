// Icone.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icone = ({ titre, icone }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icone} style={{ fontSize: '100px', color: 'white' }} />
      <h3 style={{ paddingLeft: '40px' }}>{titre}</h3>
    </div>
  );
};

export default Icone;
