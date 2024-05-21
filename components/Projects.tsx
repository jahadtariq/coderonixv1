import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore  from "swiper";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import { ProjectsList } from "../constants";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay]);

const Projects = () => {
  return (
    <section className="bg-topgradient bg-center bg-no-repeat bg-top w-full flex flex-col gap-10 py-16 font-neue">
      <h1 className="text-center uppercase text-[180px] leading-[165px] font-bold mb-10">Projects</h1>

      <div className="w-full h-[65vh] mb-10">
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
              stretch: -150,
              depth: 100,
              modifier: 1,
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
            {ProjectsList.map((item) => (
                <SwiperSlide className="w-contain h-contain">
                  <div className="bg-white/30 backdrop-blur-3xl w-[710px] h-contain rounded-[32px] text-[#000] relative px-6">
                    <div className="grid grid-cols-2 items-center justify-center gap-2">
                      <img src={item.image} alt="image" className="w-[300px] h-full"/>
                      <p className="text-[14px] text-white">{item.description}</p>
                    </div>
                    <h1 className="uppercase text-[96px] leading-[88px] font-bold text-center mb-8 absolute -bottom-32 inset-x-0 font-outline-white-1 text-transparent mb-20">
                      {item.heading} 
                    </h1>
                  </div>
                </SwiperSlide>
            ))}

          </Swiper>
      </div>

      <div className="w-full flex flex-row items-center justify-end gap-16 px-16">
          <p className="text-yellow font-normal text-[18px] leading-[27px] text-right max-w-[530px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
          <Link to={"/"}>
            <img src="/arrowwhite.svg" alt=""/>
          </Link>
      </div>

    </section>
  )
}

export default Projects;
