import React, { useEffect, useRef, useState } from "react";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./MenuNavBar.scss";

const MenuNavBar = ({ handleTabClick }) => {
  const { BusinessInsightsInfo, menuWords } = GetText("Menu");
  const { i18n } = useTranslation();

  const [dropdownItems, setDropdownItems] = useState([]);
  // const [activeTab, setActiveTab] = useState("");
  const [activeTab, setActiveTab] = useState(
    BusinessInsightsInfo[0]?.title || ""
  ); // مقدار پیش‌فرض
  const containerRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleResize = () => {
    const container = containerRef.current;
    const items = container.querySelectorAll(".menu-tabs-item");
    const dropdown = [];

    let totalWidth = 0;

    items.forEach((item) => (item.style.display = "inline-block"));

    items.forEach((item) => {
      totalWidth += item.offsetWidth;

      if (totalWidth > container.offsetWidth - 70) {
        dropdown.push(item.textContent);
        item.style.display = "none";
        totalWidth -= item.offsetWidth;
      }
    });

    setDropdownItems(dropdown);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // فراخوانی handleTabClick برای مقدار پیش‌فرض activeTab

  useEffect(() => {
    if (activeTab) {
      handleTabClick(activeTab);
    }
  }, [activeTab]);

  const onTabClick = (title) => {
    setActiveTab(title);
    handleTabClick(title);
  };

  return (
    <div className="menu-navbar-container">
      <div className="menu-tabs" ref={containerRef}>
        {BusinessInsightsInfo.map((BusinessInsight, index) => (
          <p
            className={`menu-tabs-item ${
              activeTab === BusinessInsight.title ? "active-tab" : ""
            }`}
            key={index}
            style={{ color: BusinessInsight.color }}
            onClick={() => onTabClick(BusinessInsight.title)}
          >
            {BusinessInsight.title}
          </p>
        ))}
        {dropdownItems.length > 0 && (
          <a
            href="http"
            className="dropdown-toggle"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            {menuWords.more}
            <ExpandMoreIcon />
          </a>
        )}
      </div>
      {dropdownItems.length > 0 && dropdownVisible && (
        <div
          className="dropdown-content"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          {dropdownItems.map((title, index) => (
            <a
              key={index}
              href="http"
              onClick={() => onTabClick(title)}
              className={`menu-tabs-item ${
                activeTab === title ? "active-tab" : ""
              }`}
            >
              {title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuNavBar;
