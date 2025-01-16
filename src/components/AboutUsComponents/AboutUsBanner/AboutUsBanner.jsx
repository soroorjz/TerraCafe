import React from "react";
import "./AboutUsBanner.scss";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";
const AboutUsBanner = () => {
  const { title, subTitle, description } = GetText("aboutUs");
  const { i18n } = useTranslation();

  return (
    <div className="aboutUsBanner">
      <div className="aboutUsBannerBG">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default AboutUsBanner;
