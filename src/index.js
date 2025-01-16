
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// i18next imports
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import Backend from "i18next-http-backend";
import App from "./App";
// i18next
const lan = localStorage.getItem("i18nextLng");

// i18next deps
i18next
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    debug: true,
    returnObjects: true,
    lng: lan ? lan : "fa",
    backend: {
      // loadPath: `/locales/${lan}/translation.json`,
    },
  });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* i18next provider */}
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
