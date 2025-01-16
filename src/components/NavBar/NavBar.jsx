import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import GetText from "../../functions/getTexts";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { HomePageBanner } = GetText("HomePage");
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 900) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`HomePageNavbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <div className="left">
          <Link className="about" to="/AboutUs">
            <p>{HomePageBanner.about}</p>
          </Link>
          {/* <a className="blogs" href="blogs.html">
            <p>{HomePageBanner.Blogs}</p>
          </a> */}
        </div>
        <div className="mid">
          <Link to="/">
            <p className={`navTitle ${isScrolled ? "scrolledNav" : ""}`}>
              {HomePageBanner.Terra}
            </p>
          </Link>
        </div>
        <div className="right">
          <div className="logItems">
            <button>
              <Link to="/signUp" className={`oldclass ${i18n.language === "fa" ? "faSingUpBtn" :"singUpBtn"}`}>
                {HomePageBanner.SignUp}
              </Link>
            </button>
            <button>
              <Link to="/logIn">{HomePageBanner.LogIn}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
