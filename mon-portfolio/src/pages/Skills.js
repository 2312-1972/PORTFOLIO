import React from "react";
import "../style.css";
import SkillsData from "../projects.json";

const Skill = () => {
  const renderSkillsCategory = (category) => {
    return (
      <div key={category} style={{ textAlign: "center" }}>
        <h3 className="skills-h3">{category}</h3>
        <div className="skills-container">
          {SkillsData.technology[category].map((skill) => (
            <div key={skill.name} className="skill-item">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <div className="skill-details">
                <span
                  style={{
                    color: "white",
                    letterSpacing: "2px",
                    fontWeight: "300",
                  }}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="back-contact">
      <h3 className="letter-space contact-text skills-h3 intro-resp">
        Avec une expertise approfondie dans les langages et les frameworks
        front-end tels que JavaScript, React, et Redux, je suis capable de
        donner vie à des designs exceptionnels tout en optimisant les
        performances et l'accessibilité. Mon approche axée sur la qualité et
        l'efficacité garantit des solutions robustes et évolutives.
        Développement avec HTML5, CSS3, Sass, JavaScript, React, Redux. Maîtrise
        des principes Agile pour une gestion de projet efficace. Sensibilité SEO
        et optimisation des performances. Expérience en web marketing pour une
        approche holistique.
      </h3>

      {Object.keys(SkillsData.technology).map((category) =>
        renderSkillsCategory(category)
      )}
    </div>
  );
};

export default Skill;
