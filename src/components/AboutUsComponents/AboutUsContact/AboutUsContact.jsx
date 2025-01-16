import React from "react";
import "./AboutUsContact.scss";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";
const AboutUsContact = () => {
  const { aboutUsContact } = GetText("AboutUs");
  const { i18n } = useTranslation();
  return (
    <div className="AboutUsContact-Container">
      <div className="contact-us-section">
        <div className="welcome-message">
          <h2>{aboutUsContact.title}</h2>
          <p>{aboutUsContact.desc}</p>
        </div>
        <div className="contact-container">
          <div className="contact-left">
            <h3>{aboutUsContact.location}</h3>
            <p>{aboutUsContact.add}</p>
            <iframe
              title="Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345083257!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f4f4cbd9%3A0x123456789abcdef!2sTerra%20Café!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-right">
            <h3>{aboutUsContact.Touch}</h3>
            <p>
              <strong>{aboutUsContact.phone}:</strong> {aboutUsContact.phoneNum}
            </p>
            <p>
              <strong>{aboutUsContact.email}:</strong> {aboutUsContact.emailAdd}
            </p>
            <h4>{aboutUsContact.Follow}:</h4>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                {aboutUsContact.Instagram}
                <FiInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                {aboutUsContact.Facebook}
                <RiFacebookBoxLine />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                {aboutUsContact.Twitter}
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContact;
