import React, { useState } from "react";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";
import "./OurTeam.scss";
import { SiCoffeescript } from "react-icons/si";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { CgCoffee } from "react-icons/cg";
import { SlMagicWand } from "react-icons/sl";

const iconMap = {
  SlMagicWand: SlMagicWand,
  SiCoffeescript: SiCoffeescript,
  PiCoffeeBeanFill: PiCoffeeBeanFill,
  CgCoffee: CgCoffee,
};

const OurTeam = () => {
  const { options, AboutUsBarista } = GetText("AboutUs");
  const { i18n } = useTranslation();
  const [currentOption, setCurrentOption] = useState(options[0]);
  // return (
  //   <div className="contact-us">
  //     <div className="contactUsContainer">
  //       <div className="contactTitle">
  //         <h2>** {AboutUsBarista.Title} **</h2>
  //       </div>
  //       <div className="contactUsInner">
  //         <div className="sidebar">
  //           <ul>
  //             {options.map((option, index) => (
  //               <div className="li" key={index}>
  //                 <img
  //                   className={
  //                     currentOption.id === option.id
  //                       ? "baristaImg active"
  //                       : "baristaImg"
  //                   }
  //                   src={option.image}
  //                   alt=""
  //                   onMouseEnter={() => setCurrentOption(option)}
  //                 />
  //                 <p
  //                   className={
  //                     currentOption.id === option.id ? "sub subActive" : "sub"
  //                   }
  //                 >
  //                   {option.id}
  //                   {/* نمایش آیکون در صورت انتخاب */}
  //                   {currentOption.id === option.id && (
  //                     <span className="barisptaIcon">
  //                       {React.createElement(iconMap[option.icon])}
  //                     </span>
  //                   )}
  //                 </p>
  //               </div>
  //             ))}
  //           </ul>
  //         </div>
  //         <div className="details">
  //           <div className="card">
  //             <h1>{currentOption.Title}</h1>
  //             <p>{currentOption.story}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="our-team">
      <div className="teamContainer">
        <div className="teamTitle">
          <h2>** {AboutUsBarista.Title} **</h2>
        </div>
        <div className="teamInner">
          <div className="baristaSidebar">
            <ul>
              {options.map((option, index) => (
                <div className="baristaItem" key={index}>
                  <img
                    className={
                      currentOption.id === option.id
                        ? "baristaImg active"
                        : "baristaImg"
                    }
                    src={option.image}
                    alt=""
                    onMouseEnter={() => setCurrentOption(option)}
                  />
                  <p
                    className={
                      currentOption.id === option.id ? "name nameActive" : "name"
                    }
                  >
                    {option.id}
                    {currentOption.id === option.id && (
                      <span className="baristaIcon">
                        {React.createElement(iconMap[option.icon])}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </ul>
          </div>
          <div className="baristaDetails">
            <div className="baristaCard">
              <h1>{currentOption.Title}</h1>
              <p>{currentOption.story}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
