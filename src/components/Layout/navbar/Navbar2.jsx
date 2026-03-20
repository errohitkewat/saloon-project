import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="lg:h-[7vh] h-[7vh] shadow-[0_0_5px_gray] w-screen bg-[#f5f5f5] flex items-center justify-between px-3 lg:px-12.5 fixed top-0 z-50">

        {/* Logo */}
        <div>
          <p
            className="text-[#1d1d1d] font-extrabold cursor-pointer text-2xl"
            style={{ fontFamily: "HelveticaW01-light" }}
          >
            A. Chen
          </p>
        </div>

        {/* Desktop Links */}
        <div
          className="hidden lg:-ml-100 lg:flex gap-7.5 items-center lg:text-[15px]"
          style={{ fontFamily: "HelveticaW01-Light" }}
        >
          <Link className=" font-extrabold hover:underline" to="/">Home</Link>
          <Link className=" font-extrabold hover:underline" to="/about">About</Link>
          <Link className=" font-extrabold hover:underline" to="/services">Services</Link>
          <Link className=" font-extrabold hover:underline" to="/bookonline">BookOnline</Link>
          <Link className=" font-extrabold hover:underline" to="/contact">Contact</Link>
        </div>

        {/* Right Icons container */}
        <div className="flex items-center gap-3 lg:gap-4   text-[#1d1d1d]">
          
          {/* Hamburger Icon Mobile Menu*/}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)} 
          >
            <i className="ri-menu-line"></i>
          </button>

          {/* Desktop Icons */}
          <div className="text-2xl flex gap-2">
            <i className="cursor-pointer ri-user-fill"></i>
            <i className="cursor-pointer ri-shopping-bag-2-fill"></i>
          </div>

          
        </div>
      </nav>

      {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-[6vh] left-0 w-full 
          bg-[#f5f5f5]/70 backdrop-blur 
          flex flex-col items-center gap-2 py-6 z-5
          transition-all duration-500 ease-in-out
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
          `}
          style={{ fontFamily: "Fahkwang" }}
        >
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setIsOpen(false)} to="/bookonline">BookOnline</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link>
        </div>

    </header>
  );
};

export default Navbar;
