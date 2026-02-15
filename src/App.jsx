import { motion, AnimatePresence } from "framer-motion";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homes from "./pages/Homes";
import CoffeeMenu from "./pages/Coffeemenu";
import Cart from "./pages/Cart";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/Faq";
import OffersEvents from "./pages/OffersEvents";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/Aboutus";
import ProfileSettings from "./pages/ProfileSettings";

import "./App.css";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();

  // Cart with localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const theme = {
    light: {
      card: "bg-white",
      text: "text-gray-900",
      iconAccent: "bg-amber-500",
      iconText: "hover:text-amber-600",
    },
    dark: {
      card: "bg-gray-800",
      text: "text-gray-100",
      iconAccent: "bg-amber-600",
      iconText: "hover:text-amber-400",
    },
  };

  return (
    <>
      <ScrollToTop />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        theme={theme}
      />

      {/* 🔥 Page Transition Wrapper */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<PageWrapper><Homes /></PageWrapper>}
          />

          <Route
            path="/menu"
            element={
              <PageWrapper>
                <CoffeeMenu
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  cart={cart}
                  setCart={setCart}
                />
              </PageWrapper>
            }
          />

          <Route
            path="/cart"
            element={
              <PageWrapper>
                <Cart
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  cart={cart}
                  setCart={setCart}
                />
              </PageWrapper>
            }
          />

           <Route path="/reviews" element={<PageWrapper><Reviews  darkMode={darkMode} setDarkMode={setDarkMode}/></PageWrapper>}/>

          <Route
            path="/faq"
            element={<PageWrapper><FAQ /></PageWrapper>}
          />

          <Route path="/offers" element={<PageWrapper><OffersEvents darkMode={darkMode} setDarkMode={setDarkMode}/></PageWrapper>}/>

          <Route path="/contact" element={ <PageWrapper><ContactUs darkMode={darkMode} setDarkMode={setDarkMode}/></PageWrapper>}/>

          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutUs
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              </PageWrapper>
            }
          />

          <Route
            path="/profile"
            element={<PageWrapper><ProfileSettings /></PageWrapper>}
          />
        </Routes>
      </AnimatePresence>

      <Footer darkMode={darkMode} />
    </>
  );
}

/* 🔥 Animation Wrapper */
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default App;