import { useState } from 'react';
import { Moon, Sun, MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Facebook, Instagram, Twitter, Check } from 'lucide-react';

export default function ContactUs({ darkMode, setDarkMode }) {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.subject && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }
  };

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-amber-50';
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const subTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';
  const inputClass = darkMode 
    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300 p-4 md:p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mb-6`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-3 rounded-full`}>
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${textClass}`}>Contact Us</h1>
                <p className={subTextClass}>We'd love to hear from you</p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <div className={`${cardClass} rounded-lg shadow-lg p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-3 rounded-full`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className={`text-xl font-bold ${textClass}`}>Visit Us</h2>
              </div>
              <p className={`${subTextClass} mb-2`}>
                123 Coffee Street, Bean City<br />
                Tamil Nadu, India - 632014
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${darkMode ? 'text-amber-500 hover:text-amber-400' : 'text-amber-600 hover:text-amber-700'} font-semibold`}
              >
                Get Directions →
              </a>
            </div>

            {/* Phone Card */}
            <div className={`${cardClass} rounded-lg shadow-lg p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-3 rounded-full`}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h2 className={`text-xl font-bold ${textClass}`}>Call Us</h2>
              </div>
              <a href="tel:+919876543210" className={`${subTextClass} hover:${darkMode ? 'text-amber-500' : 'text-amber-600'} transition-colors block mb-2`}>
                +91 98765 43210
              </a>
              <a href="tel:+914162632014" className={`${subTextClass} hover:${darkMode ? 'text-amber-500' : 'text-amber-600'} transition-colors block`}>
                +91 41626 32014
              </a>
            </div>

            {/* Email Card */}
            <div className={`${cardClass} rounded-lg shadow-lg p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-3 rounded-full`}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className={`text-xl font-bold ${textClass}`}>Email Us</h2>
              </div>
              <a href="mailto:hello@coffeeshop.com" className={`${subTextClass} hover:${darkMode ? 'text-amber-500' : 'text-amber-600'} transition-colors block mb-2`}>
                hello@coffeeshop.com
              </a>
              <a href="mailto:support@coffeeshop.com" className={`${subTextClass} hover:${darkMode ? 'text-amber-500' : 'text-amber-600'} transition-colors block`}>
                support@coffeeshop.com
              </a>
            </div>

            {/* Hours Card */}
            <div className={`${cardClass} rounded-lg shadow-lg p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-3 rounded-full`}>
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className={`text-xl font-bold ${textClass}`}>Opening Hours</h2>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={subTextClass}>Monday - Friday</span>
                  <span className={`font-semibold ${textClass}`}>7 AM - 10 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className={subTextClass}>Saturday</span>
                  <span className={`font-semibold ${textClass}`}>8 AM - 11 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className={subTextClass}>Sunday</span>
                  <span className={`font-semibold ${textClass}`}>8 AM - 11 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className={`${cardClass} rounded-lg shadow-lg p-6`}>
              <h2 className={`text-xl font-bold ${textClass} mb-4`}>Follow Us</h2>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'bg-gray-700 hover:bg-blue-600' : 'bg-gray-200 hover:bg-blue-600'} p-3 rounded-full transition-colors group`}
                >
                  <Facebook className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} group-hover:text-white transition-colors`} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'bg-gray-700 hover:bg-pink-600' : 'bg-gray-200 hover:bg-pink-600'} p-3 rounded-full transition-colors group`}
                >
                  <Instagram className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} group-hover:text-white transition-colors`} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'bg-gray-700 hover:bg-blue-400' : 'bg-gray-200 hover:bg-blue-400'} p-3 rounded-full transition-colors group`}
                >
                  <Twitter className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} group-hover:text-white transition-colors`} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form & Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Form */}
            <div className={`${cardClass} rounded-lg shadow-lg p-6`}>
              <h2 className={`text-2xl font-bold ${textClass} mb-6`}>Send us a Message</h2>
              
              {isSubmitted ? (
                <div className={`${darkMode ? 'bg-green-900 border-green-700' : 'bg-green-50 border-green-500'} border-2 rounded-lg p-8 text-center`}>
                  <div className={`${darkMode ? 'bg-green-700' : 'bg-green-500'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-green-700'} mb-2`}>
                    Message Sent Successfully!
                  </h3>
                  <p className={`${darkMode ? 'text-green-300' : 'text-green-600'}`}>
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-sm font-medium ${textClass} mb-2`}>
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${subTextClass}`} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium ${textClass} mb-2`}>
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${subTextClass}`} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-sm font-medium ${textClass} mb-2`}>
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${subTextClass}`} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium ${textClass} mb-2`}>
                        Subject *
                      </label>
                      <div className="relative">
                        <MessageSquare className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${subTextClass}`} />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="How can we help?"
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${textClass} mb-2`}>
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      placeholder="Tell us what's on your mind..."
                      className={`w-full px-4 py-3 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none`}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className={`w-full ${darkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-500 hover:bg-amber-600'} text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg`}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Google Map */}
            <div className={`${cardClass} rounded-lg shadow-lg overflow-hidden`}>
              <div className="p-6 pb-0">
                <h2 className={`text-2xl font-bold ${textClass} mb-4`}>Find Us on Map</h2>
              </div>
              <div className="w-full h-96">
                <iframe
                  title="Coffee Shop Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2099580654873!2d79.13243631482156!3d12.959966790866712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479b72c6273f%3A0x1f4d717962d7e108!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Banner */}
        <div className={`${darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-amber-500 to-orange-500'} rounded-lg shadow-lg p-8 mt-6 text-white text-center`}>
          <h2 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h2>
          <p className="text-amber-100 mb-4">Our team is available during business hours to help you with any questions</p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="bg-white text-amber-600 font-semibold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors"
            >
              Call Now
            </a>
            <a
              href="mailto:hello@coffeeshop.com"
              className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}