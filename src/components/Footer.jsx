
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin, Coffee, Heart } from 'lucide-react';
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Footer({ darkMode }) {

  const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState(false);

const validateEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
};


const handleSubscribe = () => {
  if (!email) {
    setError("Email is required");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email address");
    return;
  }

  // If valid
setError("");
setSuccess(true);
setEmail("");

setTimeout(() => {
  setSuccess(false);
}, 2000);
};





  const bgClass = darkMode ? 'bg-[#101828]' : 'bg-[#FFFBEB]';
const textClass = darkMode ? 'text-gray-300' : 'text-gray-900';
const headingClass = darkMode ? 'text-white' : 'text-gray-900';
const linkHoverClass = darkMode ? 'hover:text-amber-400' : 'hover:text-gray-600';
const borderClass = darkMode ? 'border-gray-700' : 'border-gray-300';
const inputBgClass = darkMode 
  ? 'bg-gray-700 text-white placeholder-gray-400' 
  : 'bg-gray-200 text-gray-900 placeholder-gray-500';
const socialBgClass = darkMode ? 'bg-gray-700' : 'bg-gray-300';
const bottomBarBgClass = darkMode ? 'bg-gray-900' : 'bg-gray-100';


const now = new Date();
const day = now.getDay(); // 0 = Sunday
const hour = now.getHours();

let isOpen = false;

if (day >= 1 && day <= 5) {
  isOpen = hour >= 7 && hour < 22; // Mon–Fri
} else {
  isOpen = hour >= 8 && hour < 23; // Sat & Sun
}


  return (
   <footer className={`${bgClass} transition-all duration-500 relative overflow-hidden`}>

           {/* Soft Top Glow */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-amber-500/10 blur-3xl rounded-full pointer-events-none"></div>

      


      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>

            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-500" />
              <h3 className={`text-2xl font-bold ${headingClass}`}>Coffee Shop</h3>
            </div>
            
            <p className={`${textClass} mb-4 leading-relaxed`}>
              Brewing happiness since 2015. We serve premium coffee with passion and dedication to our community.
            </p>
 
 <div className="flex gap-3 mt-5">
  {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
    <a
      key={i}
      href="#"
      className={`p-3 rounded-full ${socialBgClass}
      border ${borderClass}
      hover:bg-amber-500 hover:text-white hover:border-amber-500
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(251,191,36,0.6)]`}
    >
      <Icon className="w-5 h-5" />
    </a>
  ))}
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-bold ${headingClass} mb-4`}>Quick Links</h3>
            
            
<ul className="space-y-3">
  {[
    { name: "Our Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Offers & Events", path: "/offers" },
    { name: "Reviews", path: "/reviews" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ].map((item, i) => (
    <li
      className="flex items-start gap-3 group transition-all duration-300 hover:translate-x-1"
      key={i}
    >
      <Link
        to={item.path}
        className={`${textClass} flex items-center gap-2 group transition-all duration-300`}
      >
        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-125 transition"></span>
        <span className="group-hover:translate-x-1 transition">
          {item.name}
        </span>
      </Link>
    </li>
  ))}
</ul>





          </div>

          {/* Contact Info */}
          <div>
           <h3 className={`text-lg font-semibold tracking-wide ${headingClass} mb-6`}>Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className={`w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5`} />
                <div>
                  <p className={textClass}>123 Coffee Street, Bean City</p>
                  <p className={textClass}>Tamil Nadu, India - 632014</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className={`w-5 h-5 text-amber-500 flex-shrink-0`} />
                <div>
                  <a href="tel:+919876543210" className={`${textClass} ${linkHoverClass} transition-colors block`}>
                    +91 98765 43210
                  </a>
                  <a href="tel:+914162632014" className={`${textClass} ${linkHoverClass} transition-colors block`}>
                    +91 41626 32014
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className={`w-5 h-5 text-amber-500 flex-shrink-0`} />
                <div>
                  <a href="mailto:hello@coffeeshop.com" className={`${textClass} ${linkHoverClass} transition-colors block`}>
                    hello@coffeeshop.com
                  </a>
                  <a href="mailto:support@coffeeshop.com" className={`${textClass} ${linkHoverClass} transition-colors block`}>
                    support@coffeeshop.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
          

          {/* Opening Hours */}
          <div className={`p-6 rounded-xl 
dark:bg-slate-500/10
  dark:from-[#1f1b16]/80 dark:to-[#2a241c]/70
backdrop-blur-xl border ${borderClass} shadow-lg`}>


  <h3 className={`text-lg font-bold ${headingClass} mb-5 flex items-center gap-2`}>
    <Clock className="w-5 h-5 text-amber-500" />
    Opening Hours
  </h3>

<div className="space-y-3 text-sm">
  <div className="flex justify-between   transition-all duration-300 hover:translate-x-2  ">
    <span className={textClass}>Mon - Fri</span>
    <span className="text-amber-500 font-semibold ">7 AM - 10 PM</span>
  </div>

  <div className="flex justify-between   transition-all duration-300 hover:translate-x-2">
    <span className={textClass}>Saturday</span>
    <span className="text-amber-500 font-semibold">8 AM - 11 PM</span>
  </div>

  <div className="flex justify-between   transition-all duration-300 hover:translate-x-2 ">
    <span className={textClass}>Sunday</span>
    <span className="text-amber-500 font-semibold ">8 AM - 11 PM</span>
  </div>
</div>
  
 <div className={`mt-8 flex justify-end items-center gap-2 text-sm font-semibold
  ${isOpen ? "text-green-500" : "text-red-500"}`}
>
  <div
    className={`w-2.5 h-2.5 rounded-full animate-pulse
    ${isOpen ? "bg-green-500" : "bg-red-500"}`}
  ></div>

  {isOpen ? "Open Now" : "Closed"}
</div>
</div> {/* END grid */}

    </div> {/* END grid */}

      </div> {/* END main footer content */}


  {/* Newsletter Section */}
<section className="relative mb-20 px-4 sm:px-6">

  {/* Soft Gradient Glow */}
  <div className="absolute inset-0 bg-gradient-to-r 
    from-amber-400/10 via-orange-400/10 to-amber-500/10 
    blur-3xl rounded-3xl pointer-events-none"></div>

  <div
    className={`relative max-w-3xl mx-auto
    px-6 sm:px-10
    py-10 sm:py-14
    rounded-2xl sm:rounded-3xl
    shadow-lg sm:shadow-xl
    border ${borderClass}
    backdrop-blur-2xl
    transition-all duration-500
    lg:hover:shadow-2xl`}
  >

    {/* Heading */}
    <div className="text-center mb-8 sm:mb-10">
      <h3 className={`text-xl sm:text-3xl md:text-4xl font-extrabold ${headingClass} mb-3`}>
        ☕ Join Our Coffee Community
      </h3>
      <p className={`text-sm sm:text-base ${textClass} opacity-80`}>
        Be the first to know about new brews, exclusive offers & special events.
      </p>
    </div>

    {/* Form Wrapper */}
    <div className="max-w-xl mx-auto w-full">

      {/* Input + Button Row */}
      <div className="flex flex-col md:flex-row gap-4 w-full">

        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder="Enter your email address"
          className={`w-full md:flex-1
          h-[52px] sm:h-[56px]
          px-6 rounded-full
          ${inputBgClass}
          border ${error ? "border-red-500" : borderClass}
          focus:outline-none focus:ring-2
          ${error ? "focus:ring-red-500" : "focus:ring-amber-500"}
          transition-all duration-300`}
        />

        <button
          onClick={handleSubscribe}
          className="w-full md:w-auto
          h-[52px] sm:h-[56px]
          px-8 rounded-full
          bg-gradient-to-r from-amber-500 to-orange-500
          hover:from-amber-600 hover:to-orange-600
          text-white font-semibold
          transition-all duration-300
          md:hover:-translate-y-1 md:hover:scale-105
          active:scale-95 focus:ring-amber-500 focus:ring-offset-2
"
        >
          Subscribe Now →
        </button>

      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm mt-3 text-center md:text-left">
          {error}
        </p>
      )}

      {/* Success Message */}
      {success && (
        <div className="mt-5 flex items-center justify-center gap-3
          bg-green-500/10 dark:bg-green-900/30
          border border-green-400/20
          text-green-700 dark:text-green-300
          px-5 py-3 rounded-full
          animate-fadeIn w-full sm:w-auto mx-auto">

          <div className="w-5 h-5 flex items-center justify-center
            bg-green-500 text-white rounded-full text-xs font-bold">
            ✓
          </div>

          <span className="text-sm font-medium">
            Subscribed successfully!
          </span>
        </div>
      )}

    </div>

    {/* Trust Text */}
    <p className={`text-xs sm:text-sm text-center mt-6 ${textClass} opacity-60`}>
      No spam. Unsubscribe anytime.
    </p>

  </div>
</section>


  {/* Bottom Bar */}
{/* Bottom Bar */}
<div className={`border-t ${borderClass} ${bottomBarBgClass}`}>
  <div className="max-w-7xl mx-auto px-6 py-10">

    <div className="grid md:grid-cols-3 items-center gap-6 text-center md:text-left">

      {/* Left - Copyright */}
      <div>
        <p className={`${textClass} text-sm opacity-80`}>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold tracking-wide transition-all ease-in-out duration-300 hover:text-amber-500 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
  Bean Haven
</span>.
          All rights reserved.
        </p>
      </div>

      {/* Center */}
     <div className="flex items-center justify-center gap-2 text-sm">
  <span className={`${textClass} opacity-80`}>Crafted with</span>
  <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
  <span className={`${textClass} opacity-80`}>
    for coffee lovers
  </span>
</div>

      {/* Right - Links */}
    <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
  {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
    <a
      key={index}
      href={`#${item.toLowerCase().replace(/\s/g, "")}`}
      className={`${textClass} opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out relative group`}
    >
      {item}

      {/* Animated Underline */}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  ))}
</div>

    </div>

  </div>
</div>



    </footer>
  );}
