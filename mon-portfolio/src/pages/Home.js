import React from 'react';
import '../style.css';
import NavbarHeader from "../components/NavbarHeader";
import Slider from "../components/Slideshow";
import Introduction from '../components/Introduction';
import Skill from "../components/Skills";


function HomePage() {
    return (
      <div className='body'>
       <NavbarHeader/>
        <Introduction />
        <Slider />
        <Skill /> 
       
      </div>
    );
  }
  
  export default HomePage;