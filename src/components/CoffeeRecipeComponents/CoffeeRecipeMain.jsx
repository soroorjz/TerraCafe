import React from "react";
import RecipeNav from "./RecipeNav/RecipeNav";
import RecipeBanner from "./RecipeBanner/RecipeBanner";
import RecipeMaterials from "./RecipeMaterials/RecipeMaterials";
import Recipe from "./Recipe/Recipe";
import ToolWhy from "./ToolWhy/ToolWhy";

const CoffeeRecipeMain = () => {
  return (
    <>
      <RecipeNav />
      <RecipeBanner />
      <ToolWhy/>
      <RecipeMaterials />
      <Recipe />
    </>
  );
};

export default CoffeeRecipeMain;
