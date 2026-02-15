import Header from './components/Header';
import Signup from './components/Signup';
import ProfileSettings from './pages/ProfileSettings';
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import CoffeeMenu from './pages/Coffeemenu';
import Cart from './pages/Cart';
import Reviews from './pages/Reviews';
import FAQ from './pages/Faq';
import OffersEvents from './pages/OffersEvents';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/Aboutus';
import Footer from './components/Footer';
import Homes from './pages/Homes';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/signup" element={<Signup darkMode={darkMode} />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/menu" element={<CoffeeMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/offers" element={<OffersEvents />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;