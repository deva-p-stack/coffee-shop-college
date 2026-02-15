import { ShoppingCart } from "lucide-react";

function Header({ darkMode, setDarkMode }) {
  const cartCount = 2;

  return (
    <header
      className={`w-full shadow-lg transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-amber-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">☕</span>
          <h1 className="text-xl font-bold">Coffee Shop</h1>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-amber-300">
              {item}
            </a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          
          {/* THEME TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-full text-sm border border-white/30 hover:bg-white/10"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {/* CART */}
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 hover:text-amber-300" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
