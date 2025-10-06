import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TargetCursor from './components/TargetCursor/TargetCursor';

const HomePage = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const NavbarHeader = lazy(() => import('./components/NavbarHeader'));
const Skill = lazy(() => import('./pages/Skills'));
const ScrollToTopButton = lazy(() => import ('./components/ScrollToTopButton'));
const DeploymentPage = lazy(() => import('./components/DeploymentPage')); 

function App() {
  useEffect(() => {
    
  }, []);

  return (
    <Router>
      <div className='body'>
        <Suspense fallback={<div className='loading-app' ><h2 className='loading-h2' >Loading...</h2></div>}>
          <TargetCursor />
          <Header />
          <NavbarHeader/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/competences" element={<Skill />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/en-deploiement" element={<DeploymentPage />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;