import React from "react";
import "./RecipeMaterials.scss";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";
const RecipeMaterials = () => {
  const { materialList } = GetText("MaterialPart");
  const { i18n } = useTranslation();

  return (
    <div className="RecipeMaterials-Container">
      <div className="materialsPart">
        <h1 className="materialsPart-Title">What You Need:</h1>
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
          src="/assets/images/Annotation_2024-11-28_205626-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default RecipeMaterials;
