import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="bg-[#f3f1f1] items-center flex"
    >
      <SwiperSlide className="mt-5">
        <div className="flex items-center justify-center h-[645px]">
          <img
            className="lg:w-[45%] hidden lg:block"
            src="https://i.ibb.co/QPGz3Gs/slider-img1.webp"
            alt=""
          />
          <div className="content text-black lg:text-left text-center font-black lg:leading-[82px]">
            <h2 className="lg:text-[74px] text-5xl">Almighty</h2>
            <h2 className="lg:text-[74px] text-5xl">Power Tool</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-5">
        <div className="flex items-center justify-center h-[645px]">
          <img
            className="lg:w-[40%] hidden lg:block mr-20 -mb-28"
            src="https://i.ibb.co/kXHwLDy/slider-img1-2.webp"
            alt=""
          />
          <div className="content text-black lg:text-left text-center font-black lg:leading-[82px]">
            <h2 className="lg:text-[74px] text-5xl">Professional</h2>
            <h2 className="lg:text-[74px] text-5xl">Power Tools</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mt-5">
        <div className="flex items-center justify-center h-[645px]">
          <img
            className="lg:w-[27%] hidden lg:block mr-20"
            src="https://i.ibb.co/Js75PN4/slider-img1-3.webp"
            alt=""
          />
          <div className="content text-black lg:text-left text-center font-black lg:leading-[82px]">
            <h2 className="lg:text-[74px] text-5xl">Tool Set For</h2>
            <h2 className="lg:text-[74px] text-5xl">Any Project</h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
