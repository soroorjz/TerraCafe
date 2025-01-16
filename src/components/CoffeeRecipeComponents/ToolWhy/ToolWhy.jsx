import React from "react";
import "./ToolWhy.scss";
const ToolWhy = () => {
  return (
    <div className="toolWhy-Container">
      <div className="howPart">
        <div className="imagePart">
          <img src="/assets/images/v60.png" alt="" />
        </div>
        <div className="textPart">
          <h1>How Does the V60 Work?</h1>
          <p>
            The V60 is specifically designed to give you full control over the
            coffee brewing process. This tool features a 60-degree cone with
            spiral ridges inside that guide the water flow and prevent clogging.
            Its thin, specially-made paper filter plays a crucial role in
            removing unwanted oils and coffee particles. By pouring water in a
            steady, circular motion over the ground coffee, the water gently
            passes through the coffee bed, extracting a balanced and clean brew.
            The V60 is truly a combination of science and art, offering a
            precise and delightful brewing experience.
          </p>
        </div>
      </div>
      <div className="whyPart">
        <div className="textPart">
          <h1>What Are the Advantages of the V60?</h1>
          <p>
            The V60 is not only a simple tool for brewing coffee but also one of
            the most flexible and efficient methods for achieving a high-quality
            cup. Its unique design allows you to control every aspect, from
            brewing time to water temperature and grind size. This precise
            control results in a clean and transparent extraction that
            highlights the subtle flavors of the coffee. Additionally, the V60
            is lightweight, portable, and highly affordable, making it a popular
            choice among coffee enthusiasts, whether at home or on the go.
          </p>
        </div>
        <div className="imagePart">
          <img src="/assets/images/v60Nature.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ToolWhy;
