import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import Caroussel from "../components/Caroussel";
import DescriptionApartment from "../components/DescriptionApartment";
import CollapseApartment from "../components/CollapseApartment";
import Host from "../components/Host";
import Tags from "..//components/Tags";
import Rating from "..//components/Rating";
import { Navigate } from "react-router-dom";

function Apartment() {
  //extraction de l'identifiant de l'appart à partir de l'URL grace à useParams
  const { id } = useParams();
  //recherche de l'appart dans les données par son id
  const apartment = data.find((apartment) => apartment.id === id);

  if (!apartment) {
    return <Navigate to={`/error.jsx`}></Navigate>;
  }

  return (
    <>
      <Caroussel pictures={apartment.pictures} />
      <div className="details">
        <div className="details_apartment">
          <DescriptionApartment
            title={apartment.title}
            location={apartment.location}
          />
          <Tags tags={apartment.tags} />
        </div>
        <div className="detailsHost">
          <Host
            className="host"
            name={apartment.host.name}
            picture={apartment.host.picture}
          />
          <Rating rating={apartment.rating} />
        </div>
      </div>
      <CollapseApartment
        description={apartment.description}
        equipments={apartment.equipments}
      />
    </>
  );
}

export default Apartment;
