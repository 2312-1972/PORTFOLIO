import React from "react";
import "../style.css";
import "../animations/animation-sphere.css";
import OrbAnimation from "./OrbAnimation";
import portrait from "../images/20180912_110504.webp";

const Introduction = () => {
  return (
    <div className=" back-intro ">
      <span className=" circular ">
        <img
          src={portrait}
          alt="portrait"
          className="circular-image"
          style={{ padding: "4px" }}
        />
      </span>
      
      <OrbAnimation />
      <div className="intro-resp">
        <p
          className="letter-space intro-contact p1"
          style={{ marginTop: "100px" }}
        >
          Je m'appelle
          <span
            className="h-intro"
            style={{ border: "none", fontWeight: "bold", fontSize: "22px" }}
          >
          Frédéric TOPPAN,
          </span>
          enthousiaste du code et passionné par le monde numérique, je suis un
          développeur web dédié à créer des expériences en ligne
          exceptionnelles. Avec une solide formation et une expérience pratique,
          je suis constamment à la recherche de nouvelles façons d'innover et
          d'améliorer la façon dont les utilisateurs interagissent avec le web.
        </p>
        <p className="letter-space intro-contact p2">
          Ma boîte à outils comprend une expertise approfondie dans les langages
          de programmation tels que HTML, CSS, JavaScript, ainsi que des
          frameworks modernes tels que React.js et Node.js. J'ai développé et
          déployé avec succès une variété de sites web réactifs, du simple site
          vitrine aux applications web complexes.
        </p>
        <p className="letter-space intro-contact p3">
          Mon approche du développement web se caractérise par une attention
          méticuleuse aux détails, un engagement envers la qualité du code et un
          désir constant d'apprendre et de m'adapter aux dernières tendances de
          l'industrie. Je suis convaincu que la collaboration étroite avec les
          clients est essentielle pour comprendre leurs besoins uniques et créer
          des solutions sur mesure qui dépassent leurs attentes.
        </p>
        <p className="letter-space intro-contact p4">
          Je crois fermement en la collaboration et en la communication
          transparente. Travailler en équipe pour résoudre des problèmes
          complexes et atteindre des objectifs communs est quelque chose que
          j'apprécie particulièrement. Ma capacité d'adaptation me permet de
          rester "Agile" dans un environnement en constante évolution,
          m'assurant ainsi de toujours rester à la pointe de la technologie.
        </p>
        <p className="letter-space intro-contact p5">
          Si vous recherchez un développeur web passionné par son métier et
          engagé à offrir des solutions de qualité, je serais ravi de discuter
          de la façon dont nous pouvons collaborer pour atteindre vos objectifs
          numériques.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
