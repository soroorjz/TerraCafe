import React from "react";
import "./RecipeMaterials.scss";
import GetText from "../../../functions/getTexts";
import { useParams } from "react-router-dom";
const RecipeMaterials = () => {
  const { id } = useParams(); 
  const { brewingMethods } = GetText("Recipe"); 
  const selectedMethod = brewingMethods.find((method) => method.id === id); 

  if (!selectedMethod) {
    return <h2>Method not found!</h2>;
  }

  const { materialList } = selectedMethod; 

  return (
    <div className="RecipeMaterials-Container">
      <div className="materialsPart">
        <h1 className="materialsPart-Title">
          What You Need for {selectedMethod.title}:
        </h1>
        <ul className="materialsPart-List">
          {materialList.map((material) => (
            <li key={material.id} className="materialsPart-List-Item">
              {material.itemName}
            </li>
          ))}
        </ul>
      </div>
      <div className="timPart">
        <h1 className="timPart-Title">Bean To Cup Time:</h1>
        <img
          src={selectedMethod.timeImage}
          alt="Bean to cup time"
          className="timPart-Image"
        />
      </div>
    </div>
  );
};

export default RecipeMaterials;
