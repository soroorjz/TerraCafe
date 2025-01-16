import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";
const GallerySlider = () => {
  const { slides } = GetText("gallery");
  const { i18n } = useTranslation();

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="gallerySlider"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.slidId} className="gallerySlid">
          <img src={slide.slidImg} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;
