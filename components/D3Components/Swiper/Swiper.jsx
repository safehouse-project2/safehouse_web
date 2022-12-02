// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

export default function SwiperComp({ imgSrc = "../img_placeholder.svg" }) {
  const slides = [];
  if (imgSrc == "") {
    slides.push(
      <SwiperSlide>
        <img
          src="../img_placeholder.svg"
          style={{ listStyle: "none" }}
          alt="Home image"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    )
  }
  for (let i = 0; i < imgSrc.length; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" style={{
        // margin: "auto",
      }}>
        <img src={imgSrc[i]} style={{ listStyle: "none" }} alt={`Image ${i}`} className="w-full" />
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper
        tag="div"
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
