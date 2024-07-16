import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import Caroussel from "../components/Caroussel";
import DescriptionApartment from "../components/DescriptionApartment";
import CollapseApartment from "../components/CollapseApartment";
import Host from "../components/Host";
import Tags from "..//components/Tags";
import Rating from "..//components/Rating";

function Apartment() {
  //extraction de l'identifiant de l'appart à partir de l'URL grace à useParams
  const { id } = useParams();
  //recherche de l'appart dans les données par son id
  const apartment = data.find((apartment) => apartment.id === id);

  if (!apartment) {
    return <Link to={`/error.jsx`}></Link>;
  }

  return (
    <div>
      <Caroussel pictures={apartment.pictures} />
      <div className="detailsApartment">
        <DescriptionApartment
          title={apartment.title}
          location={apartment.location}
        />
        <Tags tags={apartment.tags} />
        <Host
          className="host"
          name={apartment.host.name}
          picture={apartment.host.picture}
        />
        <Rating rating={apartment.rating} />
      </div>
      <CollapseApartment
        description={apartment.description}
        equipments={apartment.equipments}
      />
    </div>
  );
}

export default Apartment;
