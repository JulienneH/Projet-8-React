import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ standard, className, contentClassName }) => {
  const [isOpen, setIsOpen] = useState(false); // isOpen est la variable d'état et setIsOpen est la fonction qui la met à jour
  const Collapse = () => {
    setIsOpen(!isOpen); // bascule l'état de la variable isOpen entre true et false
  };

  return (
    <div className={`collapse ${className}`}>
      <div className="collapse_background">
        <div className="collapse_individual">
          <div className="collapse_title">
            <h1 className="collapse_txt_title">{standard.title}</h1>
            <span className={`collapse_icon ${isOpen ? "rotate" : ""}`}>
              <FontAwesomeIcon onClick={Collapse} icon={faChevronUp} />
            </span>
          </div>
        </div>
        <div
          className={`collapse_content ${isOpen ? "open" : ""} ${contentClassName}`}
        >
          <p className="collapse_txt collapse_txt_title">{standard.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
