import { Link } from "react-router-dom"

const Aboutus = () => {
  return (
    <section className="bg-rightgradient bg-cover py-10 px-6 md:py-32 md:px-16 grid grid-cols-1 mt-16 md:mt-0 lg:grid-cols-2">

      <main className="flex flex-col gap-8 md:gap-16">
        <h1 className="font-normal font-neue text-[60px] md:text-[120px] lg:text-[180px] uppercase leading-[55px] md:leading-[165px]"><span className="font-bold">About</span> us</h1>
        <p className="text-[16px] leading-[25px] md:text-[28px] font-normal md:leading-[44.8px] max-w-[700px] text-justify">At <span className="text-[#ffff00]">CODETRONIX</span>, we specialize in Python data analysis, web development, app development, and custom software solutions. Our team of experienced professionals is dedicated to delivering exceptional results tailored to your specific needs.</p>
      </main>

      <main className="w-full h-full lg:bg-centergradient bg-center flex flex-col gap-16 items-center justify-center my-10 lg:my-0">
        <img src="aboutmodel.svg" className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[363px]"/>

        <Link to="/" className="w-full flex justify-end">
          <img src="aboutarrow.svg" className="w-[150px] md:w-auto"/>
        </Link>
      </main>
    </section>
  )
}

export default Aboutus