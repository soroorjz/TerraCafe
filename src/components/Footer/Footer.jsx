import React from "react";
import "./Footer.scss";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import GetText from "../../functions/getTexts";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { words, links, workingHours } = GetText("footer");
  const { i18n } = useTranslation();
  return (
    <footer className="footer">
      <div className="footerBg">
        <div className="footer__content">
          <div className="footer__contact">
            <h3>{words.Touch}</h3>
            <p>
              <strong>{words.phone}:</strong> {words.phoneNum}
            </p>
            <p>
              <strong>{words.email}:</strong> {words.emailAdd}
            </p>
            <h4>{words.Follow}:</h4>
            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="instagram"
              >
                {words.Instagram}
                <FiInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="facebook"
              >
                {words.Facebook}
                <RiFacebookBoxLine />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="twitter"
              >
                {words.Twitter}
                <FiTwitter />
              </a>
            </div>
          </div>
          <div className="footer__links">
            <h3> {links.Quick}</h3>
            <ul>
              <li>
                <Link to="/menu">{links.Menu}</Link>
              </li>
              <li>
                <Link to="/AboutUs">{links.AboutUs}</Link>
              </li>
              <li>
                <Link to="/Blogs">{links.Blogs}</Link>
              </li>
              <li>
                <Link to="/">{links.ContactUs}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__hours">
          <h3>{workingHours.hours}</h3>
          <p>{workingHours.desc}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
