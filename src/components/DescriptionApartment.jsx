import React from "react";

const DescriptionApartment = ({ title, location }) => {
  return (
    <>
      <h1 className="caroussel_title">{title}</h1>
      <h2 className="caroussel_location">{location}</h2>
    </>
  );
};
export default DescriptionApartment;
