import React from "react";
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";
import AboutUsIntro from "./AboutUsIntro/AboutUsIntro";
import Mission from "./Mission/Mission";
import OurTeam from "./OurTeam/OurTeam";
import OurProducts from "./OurProducts/OurProducts";
import Gallery from "./Gallery/Gallery";
import AboutUsContact from "./AboutUsContact/AboutUsContact";
import Footer from "../Footer/Footer";

const AboutUsMain = () => {
  return (
    <>
      <AboutUsBanner />
      <AboutUsIntro />
      <Mission />
      <OurTeam />
      <OurProducts />
      {/* <Gallery /> */}
      <AboutUsContact />
      <Footer/>

    </>
  );
};

export default AboutUsMain;
