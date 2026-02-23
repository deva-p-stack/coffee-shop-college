import { Coffee, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

function Navbar({ darkMode, setDarkMode, theme }) {
  const t = darkMode ? theme.dark : theme.light;
  const [isOpen, setIsOpen] = useState(false);
  


  return (
    
    <nav className={`${t.card} shadow-md sticky top-0 z-50 transition-colors duration-300`}>
  <div className="w-full mx-auto px-8 py-4">

    {/* Top Row */}
    <div className="flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
       
       <Link to="/" className="flex items-center gap-3 group">
  <div className={`${t.iconAccent} p-2 rounded-full transition duration-300 group-hover:scale-110`}>
    <Coffee className="w-8 h-8 text-white" />
  </div>

  <h1 className={`text-2xl font-bold ${t.text} transition duration-300 group-hover:opacity-80`}>
    Bean Haven
  </h1>
</Link>


      </div>

      {/* Desktop Menu */}
<div className="hidden md:flex items-center gap-8">
  {["Home", "Menu", "About", "Contact"].map((item, i) => (
    <Link
      key={i}
      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
      className={`
        relative font-semibold transition-all duration-300
        ${t.text}
        hover:text-amber-400/80
       
        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:w-0
        after:h-[2px]
        after:bg-amber-400
        after:transition-all
        after:duration-300
        hover:after:w-full
        hover:scale-105 
        active:scale-95
      `}
    >
      {item}
    </Link>
  ))}
</div>

      {/* Hamburger */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1 cursor-pointer"
>
  <span
    className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
      isOpen ? "rotate-45 translate-y-1.5" : ""
    }`}
  ></span>

  <span
    className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
      isOpen ? "opacity-0" : "opacity-100"
    }`}
  ></span>

  <span
    className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
      isOpen ? "-rotate-45 -translate-y-1.5" : ""
    }`}
  ></span>
</button>
    </div>

  {/* ✅ Mobile Menu OUTSIDE flex row */}
{isOpen && (
  <div className="md:hidden mt-4 flex flex-col gap-4 items-center transition-all duration-300">

    <Link
      to="/"
      onClick={() => setIsOpen(false)}
      className={`${t.text} font-semibold relative group transition-all duration-300 hover:scale-105`}
    >
      Home
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all duration-300 hover:bg-amber-500/10 group-hover:w-full hover:scale-105"></span>
    </Link>

    <Link
      to="/menu"
      onClick={() => setIsOpen(false)}
      className={`${t.text} font-semibold relative group transition-all duration-300 hover:scale-105 hover:scale-105 hover:bg-amber-500/10`}
    >
      Menu
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full hover:scale-105 hover:bg-amber-500/10"></span>
    </Link>

    <Link
      to="/about"
      onClick={() => setIsOpen(false)}
      className={`${t.text} font-semibold relative group transition-all duration-300 hover:scale-105 hover:bg-amber-500/10`}
    >
      About
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full hover:scale-105 hover:bg-amber-500/10"></span>
    </Link>

    <Link
      to="/contact"
      onClick={() => setIsOpen(false)}
      className={`${t.text} font-semibold relative group transition-all duration-300 hover:scale-105`}
    >
      Contact
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full hover:scale-105"></span>
    </Link>

  </div>
)}

  </div>
</nav>
  );

  
}

export default Navbar;