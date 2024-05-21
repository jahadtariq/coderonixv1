import { navLinks } from "../constants/index";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation().pathname;

  return (
    <main className="bg-gradient-to-r from-[#1A1A1A] to-[#000000] w-full py-4 px-6 md:px-12 lg:px-16 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.svg" className="cursor-pointer h-4 md:h-7 lg:h-9"/>
      </Link>
      <nav className="hidden lg:flex justify-between gap-8 items-center">
        {navLinks.map((navLink) => {

          const isActive = (location.includes(navLink.route) && navLink.route.length > 1 || location === navLink.route);

          return(
            navLink.type === "link" ? 
            (
              <Link to={navLink.route} className={`uppercase text-white font-neue text-[16px] ${isActive && 'font-semibold'}`}>{navLink.label}</Link>
            ) : 
            (
              <Link to={navLink.route} className="bg-yellow text-[#000000] rounded-md px-2 py-1 uppercase font-neue text-[16px]">
                {navLink.label}
              </Link>
            )
          )}
        )}
      </nav>
    </main>
  )
}

export default Navbar;