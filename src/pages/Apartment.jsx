import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import Caroussel from "../components/Caroussel";

function Apartment() {
  const { id } = useParams();
  const apartment = data.find((apartment) => apartment.id === id);

  if (!apartment) {
    return (
      <Link to={`/error.jsx`}>
        Appartement non trouvé. Retour à la page d'erreur.
      </Link>
    );
  }

  return (
    <div className="caroussel">
      <Caroussel pictures={apartment.pictures} />
      <h1 className="caroussel_title">{apartment.title}</h1>
      <p className="caroussel_description">{apartment.description}</p>
    </div>
  );
}

export default Apartment;
