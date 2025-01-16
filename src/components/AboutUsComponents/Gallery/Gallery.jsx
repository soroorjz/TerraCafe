import { useTranslation } from "react-i18next";
import GetText from "../../../functions/getTexts";
import "./Gallery.scss";
import GallerySlider from "./GallerySlider";

const Gallery = () => {
  const { words } = GetText("gallery");
  const { i18n } = useTranslation();

  return (
    <div className="gallery-slider">
      <h1>** {words.title} **</h1>
      <GallerySlider />
    </div>
  );
};

export default Gallery;
