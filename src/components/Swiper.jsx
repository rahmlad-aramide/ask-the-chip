// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

//eslint-disable-next-line
export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      centeredSlides={true}
      autoplay={{
        "delay": 2500,
        "disableOnInteraction": false,
      }}
      allowTouchMove={true}
      loop={true}
      freeMode={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div className="mb-10">
            <div
              className={
                isActive
                  ? `bg-[#75b8c880] h-[253px] flex justify-center items-center`
                  : `bg-[#A1C5CF] h-[179px] flex justify-center items-center`
              }
            >
              Current slide is {isActive ? "active" : "not active"} ipsum dolor sit amet consectetur, adipisicing elit. Itaque suscipit repellendus magni illum quidem! Minima voluptate quo similique incidunt quibusdam.
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={
              isActive
                ? `bg-[#75b8c880] h-[253px] flex justify-center items-center`
                : `bg-[#A1C5CF] h-[179px] flex justify-center items-center`
            }
          >
            Current slide is {isActive ? "active" : "not active"}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={
              isActive
                ? `bg-[#75b8c880] h-[253px] flex justify-center items-center`
                : `bg-[#A1C5CF] h-[179px] flex justify-center items-center`
            }
          >
            Current slide is {isActive ? "active" : "not active"}
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};
