// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export default function SwiperComp({
  imgSrc = "http://placekitten.com/500/300",
}) {
  const slides = [];
  for (let i = 0; i < imgSrc.length; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img src={imgSrc[i]} style={{ listStyle: "none" }} alt={`Slide ${i}`} />
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper
        tag="section"
        style={{
          width: "100%",
        }}
        wrapperTag="ul"
        id="main"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
    </>
  );
}