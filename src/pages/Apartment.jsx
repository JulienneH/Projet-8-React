import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";

function ApartmentDetails() {
  const { id } = useParams();
  //chercher l'appartement dans data dont l'id correspond à l'id de l'appartement de la card
  const apartment = data.find((apartment) => apartment.id === id);

  //gérer le cas où il n'y a pas d'appartement
  if (!apartment) {
    return <Link to={`/error.jsx`}></Link>;
  }

  return (
    <div className="apartment_details">
      <h1>{apartment.title}</h1>
      <img src={apartment.cover} alt={apartment.title} />
      <p>{apartment.description}</p>
    </div>
  );
}

export default ApartmentDetails;
