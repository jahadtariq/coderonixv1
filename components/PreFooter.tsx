import { FooterList } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore  from "swiper";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);

const PreFooter = () => {
  return (
    <section className="flex flex-col items-center gap-16 font-neue">

      <div className="px-16 pt-32 grid grid-cols-3 gap-6">
        <p className="col-span-2 text-[190px] leading-[175px] font-bold uppercase">Why <span className="text-yellow">choose</span> Us</p>
        <div className="flex flex-col gap-10 items-center justify-center">
          <img src="../src/assets/question.svg" className="w-[350px] h-[350px]"/>
          <img src="../src/assets/angledown.svg" className="w-[210px] h-[100px]"/>
        </div>
      </div>

      <Swiper
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={true}
            grabCursor={true}
            slidesPerView={1}
            className="w-full h-full cursor-pointer bg-footerbg bg-cover bg-bottom bg-no-repeat -mb-20"
          >
            {FooterList.map((item) => (
                <SwiperSlide className="w-contain h-contain">
                  <div className="w-full h-[900px] flex items-start justify-center pb-32 -pt-10">
                    <div className=" w-[70%] h-[670px] relative">
                    
                    <div className="absolute top-10">
                      <img src={item.image}/>
                    </div>

                    <div className="absolute w-[800px] h-[410px] rounded-[52px] bg-white/20 top-44 left-32 flex flex-col px-10 py-20 gap-10">
                      <h1 className="text-yellow uppercase text-[40px] font-bold leading-[60px]">{item.heading}</h1>
                      <p className="text-justify text-white text-[30px] font-normal leading-[36.5px]">{item.description}</p>
                    </div>

                    <h1 className="absolute text-yellow font-bold text-[250px] leading-[230px] bottom-0 right-10">{item.number}</h1>

                    </div>
                  </div>
                </SwiperSlide>
            ))}

          </Swiper>

      {/* bg-footerbg bg-contain bg-no-repeat */}
      
    
    </section>
  )
}

export default PreFooter;