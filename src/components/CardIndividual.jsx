import React from "react";

import { Link } from "react-router-dom";

const CardIndividual = ({ apartment }) => {
  return (
    <div className="card_individual">
      <Link to={`/apartment/${apartment.id}`}>
        <div className="card_title">
          <h1>{apartment.title}</h1>
        </div>
        <img className="card_img" src={apartment.cover} alt={apartment.title} />{" "}
      </Link>
    </div>
  );
};

export default CardIndividual;
