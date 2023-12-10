import React from 'react';
import '../style.css';
import Formulaire from '../components/Formulaire';


function Contact() {
    return (
      <div className=' back-contact ' >
<h3 className='h-intro intro-contact' style={{textAlign:'center'}} >Si vous recherchez un développeur front-end passionné, engagé à offrir des expériences exceptionnelles, n'hésitez pas à me contacter.
  J'adorerais discuter de la manière dont je peux contribuer à la réussite de votre prochain projet.</h3>
       <Formulaire/> 
       
      </div>
    );
  }
  
  export default Contact;