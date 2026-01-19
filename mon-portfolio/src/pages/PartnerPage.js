import React from "react";
import "../animations/formulaire-contact.css";

const PartnerPage = () => {
  return (
    <div className="layout-wrapper-contact, back-contact">
      <div className="segment">
        <h1>Partenaire Officiel</h1>
      </div>

      {/* --- BANNIÈRE NORTHWEST (Reportée à l'identique) --- */}
      <div 
        className="back-contact"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 20px",
          width: "100%",
          maxWidth: "450px",
          margin: "0 auto 40px auto",
          borderRadius: "10px",
          border: "1px solid white",
          boxSizing: "border-box",
        }}
      >
        {/* LOGO */}
        <a href="https://www.northwestregisteredagent.com/registered-agent" target="_blank" rel="noopener noreferrer">
          <img src="/images/northwest.png" alt="Logo" style={{ width: "220px", marginBottom: "20px" }} />
        </a>

        {/* ZONE DE TEXTE BLANCHE AVEC BOUTON */}
        <div 
          style={{ 
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(79, 195, 247, 0.5)",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {/* Texte Anglais */}
          <p style={{ color: "#000", fontFamily: "Roboto", fontSize: "13px", lineHeight: "1.6", margin: "0 0 10px 0", fontWeight: "bold", textAlign: "center" }}>
            Northwest Registered Agent is a Business Identity Service. Start and run your business the right way. 
            In 10 minutes and 10 clicks you can get your LLC, Address, Mail Scanning, Phone Line, Professional Email, 
            Domain Name, Web Hosting, Registered Agent, and ongoing business filings set up with Privacy By Default®.
          </p>
          
          {/* Texte Français */}
          <p style={{ color: "#333", fontFamily: "Roboto", fontSize: "12px", lineHeight: "1.5", margin: "0 0 15px 0", fontStyle: "italic", textAlign: "center" }}>
            Lancez et gérez votre entreprise correctement. Configurez votre LLC, adresse, email pro et agent enregistré en 10 minutes avec Privacy By Default®.
          </p>

          {/* BOUTON VISIT SITE */}
          <a 
            href="https://www.northwestregisteredagent.com/registered-agent" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#bdbaba",
              color: "#246b8b",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "13px",
              fontWeight: "bold",
              textDecoration: "none",
              fontFamily: "Roboto",
              transition: "all 0.3s ease",
              border: "2px solid #4fc3f7"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 0 10px #4fc3f7";
              e.currentTarget.style.backgroundColor = "#ddd5d5";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.backgroundColor = "#fcfbfb";
            }}
          >
            Visit Official Site
          </a>
        </div>

        {/* VIDÉO YOUTUBE */}
        <div style={{ width: "100%", position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px", marginBottom: "20px" }}>
          <iframe style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} src="https://www.youtube.com/embed/3lLCWiW0iBQ?si=UrMYgGD9PuiMnjAJ" title="YouTube" frameBorder="0" allowFullScreen></iframe>
        </div>

        {/* FOOTER ICÔNE AGENT */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/images/icon northwest agent.jpg" alt="Icon" style={{ width: "35px", height: "35px", borderRadius: "50%", border: "1px solid white" }} />
          <span style={{color:"black", fontSize:"15px",letterSpacing:"2px",fontFamily:"Roboto"}}>
            Official Registered Agent Service
          </span>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;