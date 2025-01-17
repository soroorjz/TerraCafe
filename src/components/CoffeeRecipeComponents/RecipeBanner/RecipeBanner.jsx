import React from "react";
import "./RecipeBanner.scss";
import { useParams } from "react-router-dom";
import GetText from "../../../functions/getTexts";
const RecipeBanner = () => {
  const { id } = useParams();
  const { brewingMethods } = GetText("Recipe");
  const selectedMethod = brewingMethods.find((method) => method.id === id);
  return (
    <div className="RecipeBanner-Container">
      <div className="RecipeBanner-Layer">
        <h1>{selectedMethod.id}</h1>
      </div>
    </div>
  );
};
export default RecipeBanner;
