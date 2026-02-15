import { useState } from 'react';
import { Coffee, Moon, Sun, MapPin, Clock, Phone, Mail, Star, Award, Users, Heart, ArrowRight, Menu } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = {
    light: {
      bg: 'bg-amber-50',
      card: 'bg-white',
      text: 'text-gray-900',
      subText: 'text-gray-600',
      border: 'border-gray-200',
      iconAccent: 'bg-amber-500',
      iconText: 'text-amber-600',
      buttonPrimary: 'bg-amber-500 hover:bg-amber-600',
      buttonSecondary: 'bg-gray-200 hover:bg-gray-300',
    },
    dark: {
      bg: 'bg-gray-900',
      card: 'bg-gray-800',
      text: 'text-gray-100',
      subText: 'text-gray-400',
      border: 'border-gray-700',
      iconAccent: 'bg-amber-600',
      iconText: 'text-amber-500',
      buttonPrimary: 'bg-amber-600 hover:bg-amber-700',
      buttonSecondary: 'bg-gray-700 hover:bg-gray-600',
    },
  };

  const t = darkMode ? theme.dark : theme.light;

  const features = [
    { icon: Award, title: 'Premium Quality', description: 'Sourced from the finest coffee farms worldwide' },
    { icon: Users, title: 'Community Hub', description: 'A welcoming space for everyone to connect' },
    { icon: Heart, title: 'Made with Love', description: 'Every cup crafted with passion and care' }
  ];

  const stats = [
    { label: 'Years of Excellence', value: '9+' },
    { label: 'Cups Daily', value: '1000+' },
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Google Rating', value: '4.8★' }
  ];

  return (
    <div className={`min-h-screen ${t.bg} transition-colors duration-300`}>
      {/* Navigation Bar */}
      <nav className={`${t.card} shadow-md sticky top-0 z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`${t.iconAccent} p-2 rounded-full`}>
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${t.text}`}>Bean Haven</h1>
                <p className={`text-xs ${t.subText}`}>Est. 2015</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className={`${t.text} font-semibold ${t.iconText} transition-colors`}>Home</a>
              <a href="#menu" className={`${t.text} font-semibold ${t.iconText} transition-colors`}>Menu</a>
              <a href="#about" className={`${t.text} font-semibold ${t.iconText} transition-colors`}>About</a>
              <a href="#contact" className={`${t.text} font-semibold ${t.iconText} transition-colors`}>Contact</a>
              <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${t.buttonSecondary} transition-colors`}>
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
            </div>

            <button className="md:hidden p-2 rounded-lg">
              <Menu className={`w-6 h-6 ${t.text}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop" alt="Coffee Shop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Fresh Coffee.<br />Good Vibes.</h2>
            <p className="text-xl md:text-2xl text-amber-100 mb-8">Your daily dose of happiness, brewed to perfection</p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Menu className="w-5 h-5" />
                View Menu
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                Order Now
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Visit Us
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* Opening Hours & Location */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className={`${t.card} rounded-lg shadow-xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`${t.iconAccent} p-3 rounded-full`}>
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${t.text}`}>Opening Hours</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className={`font-semibold ${t.text}`}>Monday - Friday</span>
                <span className={t.iconText}>7:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`font-semibold ${t.text}`}>Saturday</span>
                <span className={t.iconText}>8:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`font-semibold ${t.text}`}>Sunday</span>
                <span className={t.iconText}>8:00 AM - 11:00 PM</span>
              </div>
              
              <div className={`pt-4 border-t ${t.border}`}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-500 font-bold">Open Now</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${t.card} rounded-lg shadow-xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`${t.iconAccent} p-3 rounded-full`}>
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${t.text}`}>Visit Us</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className={`${t.text} font-semibold mb-1`}>123 Coffee Street, Bean City</p>
                <p className={t.subText}>Tamil Nadu, India - 632014</p>
              </div>
              
              <div className="space-y-2">
                <a href="tel:+919876543210" className={`flex items-center gap-2 ${t.subText} ${t.iconText} transition-colors`}>
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </a>
                <a href="mailto:hello@coffeeshop.com" className={`flex items-center gap-2 ${t.subText} ${t.iconText} transition-colors`}>
                  <Mail className="w-4 h-4" />
                  hello@coffeeshop.com
                </a>
              </div>
              
              <button className={`w-full ${t.buttonPrimary} text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4`}>
                <MapPin className="w-5 h-5" />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold ${t.text} mb-4`}>Why Choose Bean Haven?</h2>
          <p className={`text-xl ${t.subText}`}>More than just coffee - it's an experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={`${t.card} rounded-lg shadow-lg p-8 text-center transition-transform hover:scale-105`}>
                <div className={`${t.iconAccent} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${t.text} mb-3`}>{feature.title}</h3>
                <p className={t.subText}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className={`${darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-amber-500 to-orange-500'} py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-amber-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}