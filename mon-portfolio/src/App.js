import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './style.css';
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header"; 
import Footer from './components/Footer';
import NavbarHeader from './components/NavbarHeader';
import Skill from './pages/Skills';

function App() {
  return (
    <Router>
      <div className='body'>
        <Header /> 
        <NavbarHeader/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/competences" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
