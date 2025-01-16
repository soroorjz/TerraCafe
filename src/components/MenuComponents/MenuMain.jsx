import { useEffect, useState } from "react";
import GetText from "../../functions/getTexts";
import MenuNavBar from "./MenuNavBar/MenuNavBar";
import MenuTitle from "./MenuTitle/MenuTitle";
import MenuCards from "./MenuCards/MenuCards";
import "./MenuMain.scss";

function MenuMain() {
  const { menuWords } = GetText("Menu");
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    if (selectedTab === null) {
      setSelectedTab(menuWords.Logotilte);
    }
  }, [selectedTab, menuWords.Logotilte]);

  const handleTabClick = (tabTitle) => {
    setSelectedTab(tabTitle);
  };
  if (selectedTab === null) {
    return null;
  }

  return (
    <div className="menu-main-container">
      <div className="menu-header"></div>
      <MenuNavBar handleTabClick={handleTabClick} selectedTab={selectedTab} />
      <MenuTitle selectedTab={selectedTab} />
      <MenuCards selectedTab={selectedTab} />
    </div>
  );
}

export default MenuMain;
