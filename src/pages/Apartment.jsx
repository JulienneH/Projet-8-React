import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import Caroussel from "../components/Caroussel";
import Description from "../components/DescriptionApartment";
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
    <div className="caroussel">
      <Caroussel
        className="caroussel_container"
        pictures={apartment.pictures}
      />
      <Description title={apartment.title} location={apartment.location} />
      <CollapseApartment
        className="caroussel_description"
        description={apartment.description}
        equipments={apartment.equipments}
      />
      <Host
        className="host"
        name={apartment.host.name}
        picture={apartment.host.picture}
      />
      <Tags className="Tags" tags={apartment.tags} />
      <Rating rating={apartment.rating} />
    </div>
  );
}

export default Apartment;
