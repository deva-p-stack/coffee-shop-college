import Header from './components/Header';
import Signup from './components/Signup';
import ProfileSettings  from './pages/ProfileSettings';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import CoffeeMenu from './pages/Coffeemenu';
import Cart from './pages/Cart';
import Reviews from './pages/Reviews';
import FAQ from './pages/Faq';
import OffersEvents from './pages/OffersEvents';
import ContactUs from './pages/ContactUs';
import AboutUs  from './pages/Aboutus';
import Footer from './components/Footer';
import Homes from './pages/Homes';

function App() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <Homes />      */}
       <Signup darkMode={darkMode} />
      < ProfileSettings />
      < CoffeeMenu />
      < Cart />
      <Reviews />
      <FAQ />
      < OffersEvents />
      < ContactUs />
      < AboutUs />
      <Footer />

   
    
   
    
    </>
  )
}

export default App
