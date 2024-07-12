import React from "react";
import Collapse from "./Collapse";

const CollapseApartment = ({ description, equipments }) => {
  return (
    <div className="description_container">
      <Collapse
        className="description_individual"
        contentClassName="description_content"
        standard={{ title: "Description", content: description }}
      />

      <Collapse
        className="description_individual"
        contentClassName="description_content"
        standard={{
          title: "Équipements",
          content: (
            <ul>
              {equipments && equipments.length > 0 ? (
                equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))
              ) : (
                <li>Aucun équipement disponible</li>
              )}
            </ul>
          ),
        }}
      />
    </div>
  );
};

export default CollapseApartment;
