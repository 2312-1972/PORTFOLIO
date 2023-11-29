// src/components/Introduction.js
import React from 'react';
import '../style.css'
import portrait from'../images/20180912_110504.webp';

const Introduction = () => {
  return (
  <div className=' back-intro ' >
     <span className=" circular circular-rotate" > 
     <img  src={portrait} alt='portrait' className="circular-image" style={{padding:'4px'}} />
      </span>
      <h2>Présentation </h2>
      <p style={{display:'flex',justifyContent:'flex-start', alignItems:'center', padding:'80px', fontSize:'20px',fontFamily:'Dancing Script'}}>Je suis Frédéric TOPPAN, un développeur front-end passionné  avec une passion dévorante pour la création d'expériences web exceptionnelles. 
        Fort de mon parcours constitué de  solide expérience dans le développement front-end, je suis constamment en quête d'innovation et d'élégance 
        dans chaque ligne de code que j'écris.</p>
      <h3>   Compétences Clés</h3> 
      Avec une expertise approfondie dans les langages et les frameworks front-end tels que JavaScript, React, et Redux, 
      je suis capable de donner vie à des designs exceptionnels tout en optimisant les performances et l'accessibilité. 
      Mon approche axée sur la qualité et l'efficacité garantit des solutions robustes et évolutives.
      Développement avec HTML5, CSS3, Sass, JavaScript, React, Redux.
      Maîtrise des principes Agile pour une gestion de projet efficace.
      Sensibilité SEO et optimisation des performances.
      Expérience en web marketing pour une approche holistique.
       <h3>Savoir-Être </h3> 
Aisance à l'oral, force de proposition.
Excellentes compétences d'écoute et empathie.
Expérience antérieure en leadership commercial.
      <h3 style={{color:'white', border:'0.5px solid #61dafb'}}>    Objectif</h3> 
      <h3>Collaboration et Adaptabilité
Je crois fermement en la collaboration et en la communication transparente. 
Travailler en équipe pour résoudre des problèmes complexes et atteindre des objectifs communs est quelque chose que j'apprécie particulièrement.
 Ma capacité d'adaptation me permet de rester agile dans un environnement en constante évolution, 
 m'assurant ainsi de toujours rester à la pointe de la technologie.</h3>
<p>Contribuer à des projets innovants en apportant ma passion pour le développement front-end, tout en continuant à élargir mes compétences dans cet univers dynamique.</p>
      </div>
  );
};

export default Introduction;
