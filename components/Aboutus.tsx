import { Link } from "react-router-dom"

const Aboutus = () => {
  return (
    <section className="bg-rightgradient bg-cover py-32 px-16 grid grid-cols-2">

      <main className="flex flex-col gap-16">
        <h1 className="font-normal font-neue text-[180px] uppercase leading-[165px]"><span className="font-bold">About</span> us</h1>
        <p className="text-[28px] font-normal leading-[44.8px] max-w-[700px]">At <span className="text-[#ffff00]">CODETRONIX</span>, we specialize in Python data analysis, web development, app development, and custom software solutions. Our team of experienced professionals is dedicated to delivering exceptional results tailored to your specific needs.</p>
      </main>

      <main className="w-full h-full bg-centergradient bg-center flex flex-col gap-16 items-center justify-center">
        <img src="/aboutmodel.svg" className="w-[480px] h-[363px]"/>

        <Link to="/" className="w-full flex justify-end">
          <img src="/aboutarrow.svg"/>
        </Link>
      </main>
    </section>
  )
}

export default Aboutus
