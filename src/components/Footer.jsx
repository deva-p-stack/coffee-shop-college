import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin, Coffee, Heart, Sun, Moon } from 'lucide-react';

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  const bgClass = darkMode ? 'bg-[#FFFBEB]' : 'bg-[#101828]';
  const textClass = darkMode ? 'text-gray-900' : 'text-gray-300';
  const headingClass = darkMode ? 'text-gray-900' : 'text-white';
  const linkHoverClass = darkMode ? 'hover:text-gray-400' : 'hover:text-amber-400';
  const borderClass = darkMode ? 'border-gray-500' : 'border-gray-700';
  const inputBgClass = darkMode ? 'bg-gray-200' : 'bg-gray-700';
  const socialBgClass = darkMode ? 'bg-gray-300' : 'bg-gray-700';
  const bottomBarBgClass = darkMode ? 'bg-gray-100' : 'bg-gray-900';
  
  return (
    <footer className={`${bgClass} transition-colors duration-300 relative shadow-lg`}>
      {/* Dark Mode Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-700 hover:bg-gray-600'} p-3 rounded-full shadow-lg transition-all duration-300 border-2 ${darkMode ? 'border-amber-500' : 'border-gray-600'}`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-amber-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-300" />
          )}
        </button>
      </div>

            <hr className='text-gray-300' />  
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">

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
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBgClass} p-3 rounded-full ${linkHoverClass} transition-colors`}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBgClass} p-3 rounded-full ${linkHoverClass} transition-colors`}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBgClass} p-3 rounded-full ${linkHoverClass} transition-colors`}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBgClass} p-3 rounded-full ${linkHoverClass} transition-colors`}
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBgClass} p-3 rounded-full ${linkHoverClass} transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-bold ${headingClass} mb-4`}>Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className={`${textClass} ${linkHoverClass} transition-colors flex items-center gap-2`}>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#about" className={`${textClass} ${linkHoverClass} transition-colors flex items-center gap-2`}>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#offers" className={`${textClass} ${linkHoverClass} transition-colors flex items-center gap-2`}>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Offers & Events
                </a>
              </li>
              <li>
                <a href="#reviews" className={`${textClass} ${linkHoverClass} transition-colors flex items-center gap-2`}>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className={`${textClass} ${linkHoverClass} transition-colors flex items-center gap-2`}>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className={`${textClass} ${linkHoverClass} transition-colors flex items-center gap-2`}>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-bold ${headingClass} mb-4`}>Contact Info</h3>
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
          <div>
            <h3 className={`text-lg font-bold ${headingClass} mb-4 flex items-center gap-2`}>
              <Clock className="w-5 h-5 text-amber-500" />
              Opening Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className={textClass}>Monday - Friday</span>
                <span className="text-amber-500 font-semibold">7 AM - 10 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span className={textClass}>Saturday</span>
                <span className="text-amber-500 font-semibold">8 AM - 11 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span className={textClass}>Sunday</span>
                <span className="text-amber-500 font-semibold">8 AM - 11 PM</span>
              </li>
              <li className={`pt-3 border-t ${borderClass}`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Open Now</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`mt-12 pt-8 border-t  ${borderClass}`}>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className={`text-xl font-bold ${headingClass} mb-3`}>Subscribe to Our Newsletter</h3>
            <p className={`${textClass} mb-6`}>Get exclusive offers and updates delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 rounded-lg ${inputBgClass} text-gray-500  border ${borderClass} focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-gray-400`}
              />
              <button className="bg-amber-600 hover:bg-amber-500 text-white  font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${borderClass} ${bottomBarBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`${textClass} text-sm text-center md:text-left`}>
              © {new Date().getFullYear()} Coffee Shop. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm">
              <span className={textClass}>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span className={textClass}>for coffee lovers</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className={`${textClass} ${linkHoverClass} transition-colors`}>
                Privacy Policy
              </a>
              <a href="#terms" className={`${textClass} ${linkHoverClass} transition-colors`}>
                Terms of Service
              </a>
              <a href="#cookies" className={`${textClass} ${linkHoverClass} transition-colors`}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}