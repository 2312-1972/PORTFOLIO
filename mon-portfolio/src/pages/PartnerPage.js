import React from "react";
import "../animations/formulaire-contact.css";

const PartnerPage = () => {
  return (
    <div className="layout-wrapper-contact back-contact">
      <div className="segment">
        <h1>Partenaire Officiel</h1>
      </div>

      {/* --- CONTENEUR DE LA BANNIÈRE OFFICIELLE --- */}
      <div 
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
          width: "100%",
          maxWidth: "500px", 
          margin: "0 auto 40px auto",
          borderRadius: "10px",
          border: "1px solid white",
          boxSizing: "border-box",
        }}
      >
        {/* START ADVERTISER: Northwest Registered Agent LLC from awin.com */}
        <a 
          rel="sponsored noopener noreferrer" // Ajout de noopener et noreferrer pour la sécurité
          href="https://www.awin1.com/cread.php?s=4429044&v=66946&q=573874&r=2736078"
          target="_blank" 
          style={{ display: "block", width: "100%", textAlign: "center" }}
        >
          <img 
            src="https://www.awin1.com/cshow.php?s=4429044&v=66946&q=573874&r=2736078" 
            alt="Northwest Registered Agent"
            style={{ 
              maxWidth: "100%", 
              height: "auto", 
              borderRadius: "5px",
              boxShadow: "0 0 15px rgba(79, 195, 247, 0.3)" 
            }} 
          />
        </a>
        {/* END ADVERTISER: Northwest Registered Agent LLC from awin.com */}

        <p style={{ 
          color: "white", 
          marginTop: "20px", 
          fontSize: "12px", 
          fontFamily: "Roboto", 
          opacity: "0.8",
          textAlign: "center" 
        }}>
          Cliquez sur la bannière pour découvrir les services de Northwest Registered Agent.
        </p>
      </div>
    </div>
  );
};

export default PartnerPage;