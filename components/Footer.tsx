import { Link } from "react-router-dom"
import { footerAboutLinks, footerCommunityLinks, footerSocialLinks } from "../constants"

const Footer = () => {
  return (
    <section className="bg-yellow text-[#1A202C] font-neue gap-6 py-10 px-16 flex flex-col gap-4">
    
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-0 lg:grid-cols-5">
        <div className="flex flex-col gap-8 col-span-2">
          <Link to="/">
            <img src="logoblack.svg" className="h-10"/>
          </Link>

          <p className="text-[16px] font-normal max-w-[300px]">Our vision is to provide convenience and help increase your sales business.</p>

          <div className="flex gap-2 items-start">
            <Link to="/">
              <img src="Twitter.svg"/>
            </Link>
            <Link to="/">
              <img src="Instagram.svg"/>
            </Link>
            <Link to="/">
              <img src="Facebook.svg"/>
            </Link>
          </div>
        </div>
      
        <div className="flex flex-col gap-6">
          {footerAboutLinks.map((link)=>(
            link.type === "head" ? 
            <Link to={link.route} className="font-semibold text-[20px]">{link.label}</Link> 
            :
            <Link to={link.route} className="text-[16px] font-normal">{link.label}</Link>
          ))}
        </div>
      
        <div className="flex flex-col gap-6">
          {footerCommunityLinks.map((link)=>(
            link.type === "head" ? 
            <Link to={link.route} className="font-semibold text-[20px]">{link.label}</Link> 
            :
            <Link to={link.route} className="text-[16px] font-normal">{link.label}</Link>
          ))}
        </div>
        
        <div className="flex flex-col gap-6">
          {footerSocialLinks.map((link)=>(
            link.type === "head" ? 
            <Link to={link.route} className="font-semibold text-[20px]">{link.label}</Link> 
            :
            <Link to={link.route} className="text-[16px] font-normal">{link.label}</Link>
          ))}
        </div>
      </div>
    
      <hr className="h-px my-4 bg-[#48628429] border-0"/>

      <div className="flex flex-col md:flex-row gap-4 justify-between font-normal text-[16px]">
        <p>&copy;2024 <span className="font-semibold">COERONIX.</span> All rights reserved</p>

        <div className="flex gap-16 text-[16px] font-semibold">
          <Link to="/">Privacy & Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>
      </div>

    </section>
  )
}

export default Footer