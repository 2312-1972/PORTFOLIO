import React from 'react';
import '../style.css';

import Slider from "../components/Slideshow";
import Introduction from '../components/Introduction';
//import Skill from "../components/Skills";


function HomePage() {
    return (
      <div className='body'>
       <Introduction />
        <Slider />
       </div>
    );
  }
  
  export default HomePage;