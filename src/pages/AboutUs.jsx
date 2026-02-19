
import { Moon, Sun, Coffee, Heart, Award, Leaf, Users, MapPin, Globe, Target, Sparkles, Clock } from 'lucide-react';
import Navbar from "../components/Navbar";

  export default function AboutUs({ darkMode, setDarkMode }) {
  

  const team = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Founder & Head Barista',
      image: "/coffee-shop-college/images/male.jpg",
      bio: '15+ years of coffee expertise'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Coffee Roaster',
     image: "/coffee-shop-college/images/femlae.png",
      bio: 'Passionate about bean perfection'
    },
    {
      id: 3,
      name: 'Arjun Patel',
      role: 'Master Barista',
      image: "/coffee-shop-college/images/male.jpg",
      bio: 'Latte art champion 2023'
    },
    {
      id: 4,
      name: 'Sakthi  Prabha',
      role: 'Customer Experience Manager',
      image: "/coffee-shop-college/images/femlae.png",
      bio: 'Creating memorable moments'
    }
  ];

  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source only the finest Arabica and Robusta beans from sustainable farms across India and the world.'
    },
    {
      icon: Heart,
      title: 'Community Focus',
      description: 'More than a coffee shop, we\'re a gathering place where friendships are formed and ideas are shared.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices, from biodegradable cups to supporting fair-trade coffee farmers.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Every cup is crafted with precision and passion by our trained baristas who truly love what they do.'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Started with a small 500 sq ft shop and a dream to serve the perfect cup'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Opened our roastery and began sourcing beans directly from farmers'
    },
    {
      year: '2025',
      title: 'Recognition',
      description: 'Won "Best Coffee Shop in Tamil Nadu" award'
    },
    {
      year: '2026',
      title: 'Today',
      description: 'Serving 1000+ cups daily and touching lives, one coffee at a time'
    }
  ];

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-amber-50';
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const subTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300 p-4 md:p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mb-6`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-3 rounded-full`}>
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${textClass}`}>About Us</h1>
                <p className={subTextClass}>Discover our story and passion for coffee</p>
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

        {/* Hero Section with Image */}
        <div className={`${cardClass} rounded-lg shadow-lg overflow-hidden mb-6`}>
          <div className="grid md:grid-cols-2">
            <div className="relative h-96 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop"
                alt="Coffee Shop Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold mb-2">Est. 2015</h2>
                <p className="text-lg">Brewing happiness since day one</p>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h2 className={`text-3xl font-bold ${textClass} mb-4`}>Our Story</h2>
              <div className={`${subTextClass} space-y-4 leading-relaxed`}>
                <p>
                  It all started with a simple dream - to create a space where people could enjoy exceptional coffee in a warm, welcoming atmosphere. In 2015, our founder Rajesh Kumar left his corporate job to pursue his passion for coffee.
                </p>
                <p>
                  What began as a small 500 square foot shop has grown into a beloved community hub. But our core values remain unchanged: quality coffee, genuine hospitality, and a commitment to sustainability.
                </p>
                <p>
                  Today, we serve over 1,000 cups of happiness every day, but we never forget that each cup represents a moment - a morning ritual, a business meeting, a catch-up with an old friend, or a quiet moment alone with a good book.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why We Started */}
        <div className={`${cardClass} rounded-lg shadow-lg p-8 mb-6`}>
          <div className="flex items-center gap-3 mb-6">
            <Target className={`w-8 h-8 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`} />
            <h2 className={`text-3xl font-bold ${textClass}`}>Why We Started</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-amber-50'} rounded-lg p-6`}>
              <Coffee className={`w-12 h-12 ${darkMode ? 'text-amber-500' : 'text-amber-600'} mb-4`} />
              <h3 className={`text-xl font-bold ${textClass} mb-3`}>Coffee Passion</h3>
              <p className={subTextClass}>
                We believe coffee is more than a beverage - it's an experience, an art form, and a daily ritual that deserves to be exceptional.
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-amber-50'} rounded-lg p-6`}>
              <Users className={`w-12 h-12 ${darkMode ? 'text-amber-500' : 'text-amber-600'} mb-4`} />
              <h3 className={`text-xl font-bold ${textClass} mb-3`}>Community Building</h3>
              <p className={subTextClass}>
                We wanted to create a third place - not home, not work - where everyone feels welcome and connections are made.
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-amber-50'} rounded-lg p-6`}>
              <Heart className={`w-12 h-12 ${darkMode ? 'text-amber-500' : 'text-amber-600'} mb-4`} />
              <h3 className={`text-xl font-bold ${textClass} mb-3`}>Make a Difference</h3>
              <p className={subTextClass}>
                By supporting fair-trade and sustainable practices, every cup contributes to better lives for coffee farmers worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Coffee Quality & Sourcing */}
        <div className={`${cardClass} rounded-lg shadow-lg overflow-hidden mb-6`}>
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Globe className={`w-8 h-8 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`} />
                <h2 className={`text-3xl font-bold ${textClass}`}>Coffee Sourcing</h2>
              </div>
              <div className={`${subTextClass} space-y-4 leading-relaxed mb-6`}>
                <p>
                  We travel the world to find the finest coffee beans, building direct relationships with farmers who share our commitment to quality and sustainability.
                </p>
                <p>
                  Our beans come from renowned regions including Coorg and Chikmagalur in India, the highlands of Ethiopia, Colombian mountains, and Indonesian islands.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-amber-500' : 'bg-amber-600'}`} />
                  <span className={textClass}>100% Arabica & Premium Robusta beans</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-amber-500' : 'bg-amber-600'}`} />
                  <span className={textClass}>Direct trade with family-owned farms</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-amber-500' : 'bg-amber-600'}`} />
                  <span className={textClass}>Small-batch roasting for maximum freshness</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-amber-500' : 'bg-amber-600'}`} />
                  <span className={textClass}>Certified organic and fair-trade options</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop"
                alt="Coffee Beans"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className={`${cardClass} rounded-lg shadow-lg p-8 mb-6`}>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className={`w-8 h-8 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`} />
            <h2 className={`text-3xl font-bold ${textClass}`}>Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-amber-50'} rounded-lg p-6 text-center transition-transform hover:scale-105`}>
                  <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold ${textClass} mb-3`}>{value.title}</h3>
                  <p className={`${subTextClass} text-sm`}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className={`${cardClass} rounded-lg shadow-lg p-8 mb-6`}>
          <div className="flex items-center gap-3 mb-8">
            <Clock className={`w-8 h-8 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`} />
            <h2 className={`text-3xl font-bold ${textClass}`}>Our Journey</h2>
          </div>
          <div className="relative">
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-amber-200'}`} />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20">
                  <div className={`absolute left-0 w-16 h-16 rounded-full ${darkMode ? 'bg-amber-600' : 'bg-amber-500'} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {milestone.year}
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-amber-50'} rounded-lg p-6`}>
                    <h3 className={`text-xl font-bold ${textClass} mb-2`}>{milestone.title}</h3>
                    <p className={subTextClass}>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`${cardClass} rounded-lg shadow-lg p-8 mb-6`}>
          <div className="flex items-center gap-3 mb-8">
            <Users className={`w-8 h-8 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`} />
            <h2 className={`text-3xl font-bold ${textClass}`}>Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <div key={member.id} className={`${darkMode ? 'bg-gray-700' : 'bg-amber-50'} rounded-lg overflow-hidden transition-transform hover:scale-105`}>
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm text-amber-300">{member.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className={`${subTextClass} text-sm text-center`}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shop Photos Gallery */}
        <div className={`${cardClass} rounded-lg shadow-lg p-8`}>
          <div className="flex items-center gap-3 mb-8">
            <MapPin className={`w-8 h-8 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`} />
            <h2 className={`text-3xl font-bold ${textClass}`}>Our Space</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop"
                alt="Coffee Shop Interior"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop"
                alt="Barista at Work"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop"
                alt="Cozy Corner"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-amber-500 to-orange-500'} rounded-lg shadow-lg p-8 mt-6 text-white text-center`}>
          <h2 className="text-3xl font-bold mb-3">Join Our Coffee Community</h2>
          <p className="text-amber-100 mb-6 text-lg">
            Visit us today and experience the difference that passion, quality, and community make
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-amber-600 font-semibold px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors shadow-lg">
              Visit Us
            </button>
            <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}