import { Link } from "react-router-dom";

import PatternSlider from "./PatternSlider";

const Hero = () => {
  return (
    <>
    <section className="grid grid-cols-1 lg:grid-cols-3">

      <main className="col-span-1 lg:col-span-2 flex flex-col gap-10 md:mt-10">
        <h1 className="font-neue font-normal text-[45px] md:text-[65px] lg:text-[104px] uppercase leading-[40px] md:leading-[60px] lg:leading-[95px] px-6 md:px-12 lg:px-16 pt-10">
          Lorem <span className="font-semibold">Ipsum Neque porro</span> dolorem
        </h1>
        <div className="flex flex-col gap-10 bg-gradient-to-r from-[#111111] to-[#1A1A1A] w-full py-10 lg:pb-20">
          <p className="px-6 md:px-12 lg:px-16 text-[16px] font-normal leading-[25px] text-white/50 max-w-[640px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <div className="flex gap-4 px-6 md:px-12 lg:px-16 items-center">
            <img src="rightarrow.svg" alt="arrow icon" className="w-[17px] h-[29px] cursor-pointer"/>

            <Link to="/" className="bg-herobuttonbg bg-full text-[#000] uppercase font-normal text-[24px] leading-[36px] tracking-[-1.5px] px-2 pr-10">
              <span className="font-bold">contact</span> us
            </Link>
          </div>
        </div>
      </main>

      <main className="hidden lg:block relative z-10 w-full h-full my-10">
        <div className="w-full h-full flex jusitfy-center items-center z-10">
          <img className="" src="herogradientbg.svg" alt=""/>
        </div>

        <div className="absolute z-50 top-12 right-28 w-[600px] h-[600px] px-16 py-10">
          <img src="heromodel.svg" alt="" />
        </div>
      </main>
      </section>

      <PatternSlider/>
    </>
  )
}

export default Hero;