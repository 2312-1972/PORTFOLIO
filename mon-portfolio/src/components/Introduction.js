// src/components/Introduction.js
import React from 'react';
import '../style.css'
import '../animations/animation-sphere.css';
import OrbAnimation from './OrbAnimation';
import portrait from'../images/20180912_110504.webp';

const Introduction = () => {
  return (
  <div className=' back-intro ' >

     <span className=" circular " > 
     <img  src={portrait} alt='portrait' className="circular-image" style={{padding:'4px'}} />
     </span>
      <h2 className='h-intro' style={{paddingTop:'10px'}}>Présentation </h2>
   <OrbAnimation/>
      <p className='letter-space'>
        Je suis Frédéric TOPPAN, un développeur front-end passionné  avec une passion dévorante pour la création d'expériences web exceptionnelles. 
        Fort de mon parcours constitué de  solide expérience dans le développement front-end, je suis constamment en quête d'innovation et d'élégance 
        dans chaque ligne de code que j'écris.
        </p>
      <h3 className='h-intro'>    Objectifs</h3> 
      <span className='letter-space' style={{color:'white',textShadow: "0 0 5px #4fc3f7, 0 0 10px #65c8f7, 0 0 15px #4fc3f7" }}>Collaboration et Adaptabilité</span>
      <p className='letter-space'>
        Je crois fermement en la collaboration et en la communication transparente. 
        Travailler en équipe pour résoudre des problèmes complexes et atteindre des objectifs communs est quelque chose que j'apprécie particulièrement.
        Ma capacité d'adaptation me permet de rester agile dans un environnement en constante évolution, 
        m'assurant ainsi de toujours rester à la pointe de la technologie.
        Contribuer à des projets innovants en apportant ma passion pour le développement front-end, tout en continuant à élargir mes compétences dans cet univers dynamique.</p>
        <h3 className='h-intro'>savoir être </h3>
        <p className='letter-space'>Aisance à l'oral, force de proposition.Excellentes compétences d'écoute et empathie.Expérience antérieure en leadership commercial.</p>
        
      </div>
  );
};

export default Introduction;
