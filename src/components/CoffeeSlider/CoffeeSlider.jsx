import { useTranslation } from "react-i18next";
import GetText from "../../functions/getTexts";
import "./CoffeeSlider.scss";
import CoffeeSliderSwiper from "./CoffeeSliderSwiper";
function CoffeeSlider() {
  const { ToolBlogSlider } = GetText("HomePage");
  const { i18n } = useTranslation();

  return (
    <div className="coffeeSlider">
      <div className="coffeSlider-Title">
        <h1>**  {ToolBlogSlider.slogan} **</h1>
        <p>{ToolBlogSlider.title}</p>
      </div>
      <CoffeeSliderSwiper />
    </div>
  );
}
export default CoffeeSlider;
