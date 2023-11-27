import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './style.css';
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header"; // Ajoutez l'import du composant Header
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className='body'>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
