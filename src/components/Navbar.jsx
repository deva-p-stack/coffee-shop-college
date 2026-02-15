import { Coffee, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from "lucide-react";

function Navbar({ darkMode, setDarkMode, theme }) {
  const t = darkMode ? theme.dark : theme.light;


  return (
    <nav className={`${t.card} shadow-md sticky top-0 z-50  transition-colors duration-300`}>
      <div className="w-full mx-auto px-8 py-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className={`${t.iconAccent} p-2 rounded-full`}>
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h1 className={`text-2xl font-bold ${t.text}`}>
              Bean Haven
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={`${t.text} font-semibold ${t.iconText}`}>
              Home
            </Link>
            <Link to="/menu" className={`${t.text} font-semibold ${t.iconText}`}>
              Menu
            </Link>
            <Link to="/about" className={`${t.text} font-semibold ${t.iconText}`}>
              About
            </Link>
            <Link to="/contact" className={`${t.text} font-semibold ${t.iconText}`}>
              Contact
            </Link>
            




          </div>

          <button className="md:hidden p-2 rounded-lg">
            <Menu className={`w-6 h-6 ${t.text}`} />
          </button>


        </div>
      </div>
    </nav>
  );

  
}

export default Navbar;