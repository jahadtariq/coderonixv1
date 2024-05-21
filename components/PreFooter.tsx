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

      <div className="px-6 md:px-16 pt-16 md:pt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <p className="lg:col-span-2 text-[60px] leading-[60px] md:text-[120px] md:leading-[100px] lg:text-[190px] lg:leading-[175px] font-bold uppercase">Why <span className="text-yellow">choose</span> Us</p>
        <div className="hidden md:flex flex-col gap-10 items-center justify-center">
          <img src="question.svg" className="w-[175px] h-[175px] lg:w-[350px] lg:h-[350px]"/>
          <img src="angledown.svg" className="w-[105px] h-[50px] lg:w-[210px] lg:h-[100px]"/>
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
                  <div className="w-full h-[550px] md:h-[900px] flex items-start justify-center pb-32 -pt-10">
                    <div className="w-full px-4 md:px-0 lg:w-[70%] h-[670px] relative">
                    
                    <div className="absolute top-10">
                      <img src={item.image} className="w-[150px] h-[150px] w-[250px] h-[250px] lg:w-auto lg:h-auto"/>
                    </div>

                    <div className="absolute w-[400px] h-[250px] md:w-[800px] md:h-[410px] rounded-[52px] bg-white/20 top-28 left-16 md:top-44 md:left-32 flex flex-col px-4 py-8 md:px-10 md:py-20 gap-4 md:gap-10">
                      <h1 className="text-yellow uppercase text-[20px] md:text-[40px] font-bold leading-[30px] md:leading-[60px]">{item.heading}</h1>
                      <p className="text-justify text-white text-[16px] md:text-[30px] font-normal md:leading-[36.5px]">{item.description}</p>
                    </div>

                    <h1 className="absolute text-yellow font-bold text-[85px] md:text-[250px] md:leading-[230px] bottom-64 right-10 md:bottom-0 md:right-10">{item.number}</h1>

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