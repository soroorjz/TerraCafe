import React from "react";
import "./AboutUsIntro.scss";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";
const AboutUsIntro = () => {
  const { StoryTitle, Story } = GetText("aboutUs");
  const { i18n } = useTranslation();

  return (
    <div className="aboutUsIntro">
      <div className="aboutUsStory">
        <h1>{StoryTitle}</h1>
        <p>{Story}</p>
      </div>
      <div className="aboutUsImg">
        <img src="/assets/images/coffeeFarm1.jpg" alt="" />
      </div>
    </div>
  );
};

export default AboutUsIntro;
