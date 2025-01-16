import { useTranslation } from "react-i18next";
import { cheackDir } from "./functions/cheackDir";
import { useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import CoffeeRecipe from "./pages/CoffeeRecipe/CoffeeRecipe";
import AboutUs from "./pages/AboutUs/AboutUs";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const { i18n } = useTranslation();
  const lan = i18n.language;
  const dir = cheackDir(lan);
  console.log(dir, "direction");
  useEffect(() => {
    document.body.setAttribute("dir", dir ? "rtl" : "ltr");
    document.body.className = lan === "fa" ? "font-fa" : "font-en";
  }, [lan]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/brewing-methods/:id" element={<CoffeeRecipe />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/:formType" element={<SignUp />} />
    </Routes>
  );
}

export default App;
