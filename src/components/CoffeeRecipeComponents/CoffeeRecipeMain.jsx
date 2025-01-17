import React from "react";
import RecipeBanner from "./RecipeBanner/RecipeBanner";
import RecipeMaterials from "./RecipeMaterials/RecipeMaterials";
import Recipe from "./Recipe/Recipe";
import ToolWhy from "./ToolWhy/ToolWhy";

const CoffeeRecipeMain = () => {
  return (
    <>
      <RecipeBanner />
      <ToolWhy />
      <RecipeMaterials />
      <Recipe />
    </>
  );
};

export default CoffeeRecipeMain;
