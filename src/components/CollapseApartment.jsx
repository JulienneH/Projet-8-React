import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CollapseApartment = ({ description, equipments }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); // isOpen est la variable d'état et setIsOpen est la fonction qui la met à jour
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  const CollapseDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen); // bascule l'état de la variable isOpen entre true et false
  };
  const CollapseEquipments = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };

  return (
    //Collapse pour la description
    <div className="standard description_container ">
      <div className="standard_individual description_individual">
        <div className="standard_title" onClick={CollapseDescription}>
          <h1>Description</h1>
          <span
            className={`standard_icon ${isDescriptionOpen ? "rotate" : ""}`}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </div>
      </div>
      <div className={`standard_content ${isDescriptionOpen ? "open" : ""}`}>
        <p>{description}</p>
      </div>

      <div className="standard_individual description_individual">
        <div className="standard_title" onClick={CollapseEquipments}>
          <h1>Équipements</h1>
          <span className={`standard_icon ${isEquipmentsOpen ? "rotate" : ""}`}>
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </div>
      </div>
      <div className={`standard_content ${isEquipmentsOpen ? "open" : ""}`}>
        <ul>
          {equipments && equipments.length > 0 ? (
            equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))
          ) : (
            <li>Aucun équipement disponible</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CollapseApartment;
