import React from 'react';

import '../style.css';

const Loader = () => {
    return (
      <loader className='header'>
        <div className="logo-container">
        <div className="outer-circle"></div>
        <div className="inner-circle"><div className="initials">PORTFOLIO</div>
        </div>
      </div>
      <h1 className="header-title">Portfolio</h1>
      </loader>
    );
  }
  
  export default Loader;