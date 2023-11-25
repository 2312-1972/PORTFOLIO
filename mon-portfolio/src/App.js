
import React from 'react';
import './style.css';
import Header from "./components/Header";
import Slider from "./components/Slideshow";
import Introduction from "./components/Introductions";
import Skills from "./components/Introductions";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className='body'>
      <Header />
      <Introduction />
      <Slider />
       <Skills /> 
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
