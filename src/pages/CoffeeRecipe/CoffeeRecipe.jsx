import React from "react";
import CoffeeRecipeMain from "../../components/CoffeeRecipeComponents/CoffeeRecipeMain";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const CoffeeRecipe = () => {
  return (
    <>
      <NavBar />
      <CoffeeRecipeMain />
      <Footer />
    </>
  );
};

export default CoffeeRecipe;
