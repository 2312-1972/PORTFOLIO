// src/components/DeploymentPage.js

import React from 'react';
import DomeGallery from './DomeGallery/DomeGallery'; // Assurez-vous que le chemin est correct
import './DeploymentPage.css'; // Nous allons créer ce fichier CSS juste après

export default function DeploymentPage() {
  return (
    <div className="deployment-container">
      {/* Le composant d'animation en fond */}
      <div className="background-gallery">
        <DomeGallery />
      </div>

      {/* Le contenu textuel par-dessus */}
      <div className="deployment-content">
        <div className="text-box"> 
          <h1>Site en cours de déploiement</h1>
          <p>Nous travaillons actuellement sur des améliorations. Merci de votre patience.</p>
        </div>
      </div>
    </div>
  );
}