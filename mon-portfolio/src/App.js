
import React from 'react';
import './style.css';
import Header from "./components/Header";
import Introduction from "./components/Introductions";
import Skills from "./components/Introductions";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div >
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
