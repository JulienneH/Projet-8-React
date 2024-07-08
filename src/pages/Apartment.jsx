import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import Caroussel from "../components/Caroussel";

function Apartment() {
  //extraction de l'identifiant de l'appart à partir de l'URL grace à useParams
  const { id } = useParams();
  //recherche de l'appart dans les données par son id
  const apartment = data.find((apartment) => apartment.id === id);

  if (!apartment) {
    return <Link to={`/error.jsx`}></Link>;
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
