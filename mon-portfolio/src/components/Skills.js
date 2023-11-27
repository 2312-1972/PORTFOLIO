import React from 'react';
import '../style.css';

//import reactLogo from '../images/React.png';
import javascriptLogo from '../images/Javascript.png';
import reduxLogo from '../images/Redux.png';
import githublogo from '../images/Github.png';
//import css3 from '../images/Css 3.jpg';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';




const Skill = () => {
  return (
    <div id="competences" className='header'>
     <h2>Compétences</h2>
      <ul style={{display:'flex', gap:'28px'}}>
      <div > 
        <li className="circle-container" >
          <FaHtml5  style={{fontSize:'100px', color:'white'}}/>
          {/* <img src={FaHtml5} alt="Html 5 Logo" className="circular-image"  /> */}
        </li>
          <h3 style={{paddingLeft:'40px'}}>HTML 5</h3>
    </div>
   <div>
   <li className="circle-container">
          {/* <img src={css3} alt="Css3 Logo" className="circular-image" /> */}
          <FaCss3  style={{fontSize:'100px', color:'white'}}/>
        </li>
        <h3 style={{paddingLeft:'40px'}}>CSS 3</h3>
   </div>
   <div>
   <li className="circle-container">
          {/* <img src={figma} alt="Css3 Logo" className="circular-image" /> */}
          <FaFigma  style={{fontSize:'100px', color:'white'}}/>
        </li>
        <h3 style={{paddingLeft:'40px'}}>Figma</h3>
   </div>
   
   
   
   
    <div > 
        <li className="circle-container" >
        <FaReact style={{fontSize:'100px', color:'white'}}/>
          {/* <img src={reactLogo} alt="React Logo" className="circular-image"  /> */}
        </li>
          <h3 style={{paddingLeft:'40px'}}>React</h3>
    </div>

        <li className="circle-container">
          <img src={javascriptLogo} alt="JavaScript Logo" className="circular-image" />
          
        </li>
        <li className="circle-container">
          <img src={reduxLogo} alt="Redux Logo" className="circular-logo"  />
          
        </li>
        
        <li className="circle-container">
          <img src={githublogo} alt="Github  Logo" className="circular-image" />
          
        </li>
       
        
      </ul>
    </div>
  );
};

export default Skill;
