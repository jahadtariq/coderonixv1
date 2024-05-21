import { ServicesList } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore  from "swiper";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay]);

const Services = () => {

  return (
    <div className="shadow-[#000000E5] shadow-4xl w-full h-contain flex flex-col gap-10 items-center p-16 bg-centergradient bg-center bg-no-repeat overflow-hidden">
          <div className="uppercase text-[180px] leading-[165px] font-bold mb-20">services</div>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={true}
            grabCursor={true}
            modules={[EffectCoverflow]}
            className="w-full h-full cursor-pointer"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            {ServicesList.map((item) => (
              <SwiperSlide className="bg-[#FFFF00] w-[340px] h-[494.5px] rounded-3xl text-[#000] flex flex-col justify-between">
                  <div>
                    <h1 className="uppercase px-6 pt-4 text-[96px] leading-[88px] font-bold max-w-[250px] mb-8">
                      {item.label}
                    </h1>
                    <img src={item.url} className="h-[400px] w-[400px]"/>
                  </div>
              </SwiperSlide>
            ))}

          </Swiper>

          <Link to="/" className="w-full flex justify-center items-center mt-10">
            <img src="/aboutarrow.svg"/>
          </Link>
        </div>
  )
}

export default Services;
