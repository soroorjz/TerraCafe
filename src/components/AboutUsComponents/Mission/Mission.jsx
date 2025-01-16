import React from "react";
import "./Mission.scss";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { missions, missionTitle } = GetText("AboutUs");
  const { i18n } = useTranslation();
  return (
    <div className="mission-section">
      <h2 className="mission-title">** {missionTitle} **</h2>
      <div className="mission-container">
        {missions.map((mission) => (
          <div className="mission-card" key={mission.id}>
            <div className="mission-icon">{mission.icon}</div>
            <h3>{mission.title}</h3>
            <p>{mission.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
