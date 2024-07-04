import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const aboutList = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const CardStandard = ({ standard }) => {
  const [isOpen, setIsOpen] = useState(false); // isOpen est la variable d'état et setIsOpen est la fonction qui la met à jour
  const Collapse = () => {
    setIsOpen(!isOpen); // bascule l'état de la variable isOpen entre true et false
  };

  return (
    <>
      <div className="standard_individual">
        <div className="standard_title" onClick={Collapse}>
          <h1>{standard.title}</h1>
          <span className={`standard_icon ${isOpen ? "rotate" : ""}`}>
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </div>
      </div>
      <div className={`standard_content ${isOpen ? "open" : ""}`}>
        <p>{standard.content}</p>
      </div>
    </>
  );
};
//création d'un composant CardStandard pour chaque élément "standard" de AboutList
//il contient 2 props : une key et le contenu (title , content)
const DisplayCards = () => {
  return (
    <div className="standard_container">
      {aboutList.map((standard, index) => (
        <CardStandard key={index} standard={standard} />
      ))}
    </div>
  );
};
const About = () => {
  return <DisplayCards />;
};
export default About;
