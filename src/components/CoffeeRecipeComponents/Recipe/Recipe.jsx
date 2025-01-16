import React from "react";
import "./Recipe.scss";
import GetText from "../../../functions/getTexts";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const { brewingMethods } = GetText("Recipe");
  const selectedMethod = brewingMethods.find((method) => method.id === id);

  if (!selectedMethod) {
    return <p>Recipe not found. Please check the URL.</p>;
  }

  const { steps } = selectedMethod;

  return (
    <div className="recipe-Container">
      <h1>Preparation instructions for {selectedMethod.title}</h1>
      <div className="steps-wrapper">
        {steps.map((step) => (
          <div key={step.stepNumber} className="step-item">
            <div className="step-item--num">
              <span className="item--num">
                <b>{step.stepNumber}</b>
              </span>
              <i className="line"></i>
            </div>
            <div className="step-item--content">
              <p className="step-item__title">{step.title}</p>
              <div className="step-main-content">
                <p>{step.description}</p>
                <img src={step.image} alt={`Step ${step.stepNumber}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
