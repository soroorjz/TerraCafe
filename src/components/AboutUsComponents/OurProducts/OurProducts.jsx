import React from "react";
import "./OurProducts.scss";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";

const OurProducts = () => {
  const { sections, words } = GetText("Products");
  const { i18n } = useTranslation();

  return (
    <div className="OurProductsPart">
      <div className="productTitle">
        <h1>** {words.title} **</h1>
        <p>{words.subTitle}</p>
      </div>
      <div className="rotating-blocks">
        {sections.map((section, index) => (
          <div className="block" key={index}>
            <div className="block-front">
              <img src={section.img} alt={section.title} />
              <h3>{section.title}</h3>
            </div>
            <div className="block-back" style={{ background: section.color }}>
              <p>{section.desc}</p>
              <button>{words.Explore}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
