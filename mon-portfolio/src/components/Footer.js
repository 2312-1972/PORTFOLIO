// src/components/Footer.js
import React from 'react';
import { Link} from 'react-router-dom';
import { FaGithub,  FaLinkedin, FaEnvelope} from 'react-icons/fa';
import '../style.css'




const Footer = () => {
  return (
    <footer id='CV'  className='back-footer' >
      
      <div className='a'>   
      <Link to={'./pages/contact'}><FaEnvelope style={{fontSize:'25px'}}/></Link>
      <Link to={'https://github.com/2312-1972'}><FaGithub style={{fontSize:'25px'}}/></Link>
      <Link to={'https://www.linkedin.com/in/frederic-t-283ab24b/'}><FaLinkedin style={{fontSize:'25px'}}/></Link>
       </div>
       <h4 style={{fontSize:'12px',color:'white'}}>©2023  Frédéric TOPPAN, Tous droits réservés </h4>
    </footer>
  );
};

export default Footer;
