import { useTranslation } from "react-i18next";
import GetText from "../../functions/getTexts";
import { Link } from "react-router-dom";
import "./Banner.scss";
function Banner() {
  const { HomePageBanner } = GetText("HomePage");
  const { i18n } = useTranslation();

  return (
    <>
      <header>
        <div className="mainHeader">
          <h1>{HomePageBanner.Terra}</h1>
          <div className="btns">
            <Link to="/menu" className="menua">
              <button className="book-btn">{HomePageBanner.Menu}</button>
            </Link>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="book-btn">{HomePageBanner.Beans}</button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
export default Banner;
