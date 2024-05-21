
import Hero from "../../components/Hero";
import Aboutus from "../../components/Aboutus";
import Projects from "../../components/Projects";
import Services from "../../components/Services";
import PreFooter from "../../components/PreFooter";

import { AchievementList } from "../../constants";

const Home = () => {
  return (
    <>
      <Hero/>
      <Aboutus/>
      <Services/>
      <Projects/>
      <div className="bg-yellow flex flex-wrap justify-evenly px-6 py-4 h-contain font-neue text-[#000]">
        {AchievementList.map((item) =>(
          <div className="flex items-center gap-2">
            <img src={item.image}/>
            <p className="text-[20px] md:text-[48px] leading-[77px] font-normal"><span className="font-bold">{item.number}{item.isplus ? '+' : ''} </span> {item.label}</p>
          </div>
        ))}
      </div>
      <PreFooter/>
    </>
  )
}

export default Home;