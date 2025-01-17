import React from "react";
import "./ToolWhy.scss";
import { useParams } from "react-router-dom";
import GetText from "../../../functions/getTexts";
const ToolWhy = () => {
  const { id } = useParams();
  const { brewingMethods } = GetText("Recipe");
  const selectedMethod = brewingMethods.find((method) => method.id === id);
  const { howWorks } = selectedMethod;
  return (
    <div className="toolWhy-Container">
      <div className="howPart">
        <div className="imagePart">
          <img src={howWorks.img1} alt="" />
        </div>
        <div className="textPart">
          <h1>{howWorks.title1}</h1>
          <p>{howWorks.p1}</p>
        </div>
      </div>
      <div className="whyPart">
        <div className="textPart">
          <h1>{howWorks.title2}</h1>
          <p>{howWorks.p2}</p>
        </div>
        <div className="imagePart">
          <img src={howWorks.img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ToolWhy;
