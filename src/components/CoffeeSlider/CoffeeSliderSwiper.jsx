import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import GetText from "../../functions/getTexts";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CoffeeSliderSwiper() {
  const { words, brewingMethods } = GetText("Recipe");
  const { i18n } = useTranslation();
  
  return (
    <div className="toolBlaog-Slider">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="toolBlaogSlider"
        breakpoints={{
          1025: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          728: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          480: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          365: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
      >
        {brewingMethods.map((brewingMethod) => (
          <SwiperSlide key={brewingMethod.id} className="toolBlaog-Slide">
            <h2>{brewingMethod.title} </h2>
            <img src={brewingMethod.image} alt="" />
            <p>{brewingMethod.description}</p>
            <button>
              <Link to={`/brewing-methods/${brewingMethod.id}`}>
                {words.button}
              </Link>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CoffeeSliderSwiper;
