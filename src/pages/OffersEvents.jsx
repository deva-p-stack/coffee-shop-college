import { useState } from 'react';
import { Moon, Sun, Percent, Music, Coffee, Calendar, Clock, MapPin, Tag, Gift, Users, Sparkles, Trophy, Heart, Star } from 'lucide-react';

export default function OffersEvents() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const offers = [
    {
      id: 1,
      type: 'discount',
      title: 'Happy Hour Special',
      description: 'Get 30% off on all beverages between 3 PM - 5 PM on weekdays',
      discount: '30% OFF',
      validUntil: '2024-12-31',
      terms: 'Valid Monday to Friday only. Not combinable with other offers.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
      featured: true,
      tag: 'Limited Time'
    },
    {
      id: 2,
      type: 'discount',
      title: 'Student Discount',
      description: 'Show your student ID and enjoy 20% off on all menu items',
      discount: '20% OFF',
      validUntil: '2024-12-31',
      terms: 'Valid student ID required. Available all day, every day.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
      featured: false,
      tag: 'Ongoing'
    },
    {
      id: 3,
      type: 'discount',
      title: 'Buy 2 Get 1 Free',
      description: 'Purchase any 2 large beverages and get a third one absolutely free',
      discount: 'BOGO',
      validUntil: '2024-03-15',
      terms: 'Free item must be of equal or lesser value. Weekends only.',
      image: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=600&h=400&fit=crop',
      featured: true,
      tag: 'Weekend Special'
    },
    {
      id: 4,
      type: 'discount',
      title: 'First Order Discount',
      description: 'New customers get flat ₹100 off on orders above ₹500',
      discount: '₹100 OFF',
      validUntil: '2024-12-31',
      terms: 'Use code: FIRST100. Valid on app orders only.',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop',
      featured: false,
      tag: 'New Customer'
    },
    {
      id: 5,
      type: 'seasonal',
      title: 'Spring Blossom Latte',
      description: 'Delicate rose and lavender flavors with vanilla cream. Limited edition!',
      discount: 'NEW',
      validUntil: '2024-03-31',
      terms: 'Available while supplies last. Seasonal item.',
      image: 'https://images.unsplash.com/photo-1578374173705-0ba7d4bb0c02?w=600&h=400&fit=crop',
      featured: true,
      tag: 'Seasonal Drink'
    },
    {
      id: 6,
      type: 'seasonal',
      title: 'Mango Tango Cold Brew',
      description: 'Refreshing cold brew infused with fresh mango and mint',
      discount: 'NEW',
      validUntil: '2024-04-30',
      terms: 'Summer special. Available in medium and large only.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop',
      featured: false,
      tag: 'Summer Special'
    }
  ];

  const events = [
    {
      id: 7,
      type: 'event',
      title: 'Live Jazz Night',
      description: 'Enjoy smooth jazz performances by local artists every Friday evening',
      date: 'Every Friday',
      time: '7:00 PM - 10:00 PM',
      location: 'Main Hall',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&h=400&fit=crop',
      featured: true,
      tag: 'Weekly Event',
      capacity: 'Limited Seating'
    },
    {
      id: 8,
      type: 'event',
      title: 'Open Mic Night',
      description: 'Share your talent! Poetry, comedy, or music - all welcome',
      date: 'Every Saturday',
      time: '8:00 PM - 11:00 PM',
      location: 'Outdoor Patio',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop',
      featured: false,
      tag: 'Weekly Event',
      capacity: 'Sign-up Required'
    },
    {
      id: 9,
      type: 'event',
      title: 'Latte Art Workshop',
      description: 'Learn the art of creating beautiful latte designs from our expert baristas',
      date: 'March 15, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Barista Counter',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop',
      featured: true,
      tag: 'Workshop',
      capacity: '15 seats - ₹500'
    },
    {
      id: 10,
      type: 'event',
      title: 'Coffee Tasting Experience',
      description: 'Discover flavors from around the world in our guided coffee tasting session',
      date: 'March 22, 2024',
      time: '3:00 PM - 5:00 PM',
      location: 'Private Room',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop',
      featured: false,
      tag: 'Tasting Event',
      capacity: '20 seats - ₹800'
    },
    {
      id: 11,
      type: 'event',
      title: 'Acoustic Sunday Sessions',
      description: 'Relax with acoustic performances and complimentary pastries',
      date: 'Every Sunday',
      time: '11:00 AM - 1:00 PM',
      location: 'Garden Area',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=400&fit=crop',
      featured: true,
      tag: 'Weekly Event',
      capacity: 'Free Entry'
    },
    {
      id: 12,
      type: 'event',
      title: 'Valentine\'s Special Dinner',
      description: 'Romantic coffee & dessert pairing experience for couples',
      date: 'February 14, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Rooftop Terrace',
      image: 'https://images.unsplash.com/photo-1518057111178-44a106bad636?w=600&h=400&fit=crop',
      featured: true,
      tag: 'Special Event',
      capacity: 'Couples Only - ₹2000/couple'
    }
  ];

  const allItems = [...offers, ...events];

  const filteredItems = allItems.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  }).filter(item => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'featured') return item.featured;
    if (selectedFilter === 'discount') return item.type === 'discount';
    if (selectedFilter === 'seasonal') return item.type === 'seasonal';
    if (selectedFilter === 'event') return item.type === 'event';
    return true;
  });

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-amber-50';
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const subTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const getIcon = (type) => {
    switch(type) {
      case 'discount': return Percent;
      case 'seasonal': return Coffee;
      case 'event': return Music;
      default: return Gift;
    }
  };

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300 p-4 md:p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mb-6`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-3 rounded-full`}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${textClass}`}>Offers & Events</h1>
                <p className={subTextClass}>Discover our latest deals and upcoming happenings</p>
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

        {/* Tabs */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'all'
                ? darkMode ? 'bg-amber-600 text-white' : 'bg-amber-500 text-white'
                : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            All
          </button>
          <button
            onClick={() => setActiveTab('discount')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'discount'
                ? darkMode ? 'bg-amber-600 text-white' : 'bg-amber-500 text-white'
                : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Percent className="w-5 h-5" />
            Discounts
          </button>
          <button
            onClick={() => setActiveTab('seasonal')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'seasonal'
                ? darkMode ? 'bg-amber-600 text-white' : 'bg-amber-500 text-white'
                : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Coffee className="w-5 h-5" />
            Seasonal Drinks
          </button>
          <button
            onClick={() => setActiveTab('event')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'event'
                ? darkMode ? 'bg-amber-600 text-white' : 'bg-amber-500 text-white'
                : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Music className="w-5 h-5" />
            Events
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['all', 'featured'].map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                selectedFilter === filter
                  ? darkMode ? 'bg-gray-700 text-amber-400' : 'bg-amber-100 text-amber-700'
                  : darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter === 'all' ? '🌟 All' : '⭐ Featured'}
            </button>
          ))}
        </div>

        {/* Featured Highlights Banner */}
        <div className={`${darkMode ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-amber-500 to-orange-500'} rounded-lg shadow-lg p-8 mb-6 text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">🎉 This Week's Highlights</h2>
              <p className="text-amber-100 mb-4">Don't miss out on our amazing offers and events!</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>3 Active Discounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5" />
                  <span>2 Live Events</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5" />
                  <span>2 New Drinks</span>
                </div>
              </div>
            </div>
            <Sparkles className="w-24 h-24 opacity-20" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => {
            const Icon = getIcon(item.type);
            const isEvent = item.type === 'event';

            return (
              <div
                key={item.id}
                className={`${cardClass} rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                  item.featured ? 'ring-2 ring-amber-500' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.featured && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      FEATURED
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                    {item.tag}
                  </div>
                  {!isEvent && (
                    <div className={`absolute bottom-3 right-3 ${darkMode ? 'bg-amber-600' : 'bg-amber-500'} text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg`}>
                      {item.discount}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-2 rounded-full`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${textClass}`}>{item.title}</h3>
                  </div>

                  <p className={`${subTextClass} mb-4 line-clamp-2`}>{item.description}</p>

                  {isEvent ? (
                    <div className="space-y-2 mb-4">
                      <div className={`flex items-center gap-2 text-sm ${subTextClass}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${subTextClass}`}>
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${subTextClass}`}>
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-amber-500' : 'text-amber-600'} font-semibold`}>
                        <Users className="w-4 h-4" />
                        <span>{item.capacity}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className={`flex items-center gap-2 text-sm ${subTextClass} mb-2`}>
                        <Calendar className="w-4 h-4" />
                        <span>Valid until {new Date(item.validUntil).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <p className={`text-xs ${subTextClass} italic`}>{item.terms}</p>
                    </div>
                  )}

                  <button
                    className={`w-full ${darkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-500 hover:bg-amber-600'} text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2`}
                  >
                    {isEvent ? (
                      <>
                        <Calendar className="w-5 h-5" />
                        Book Now
                      </>
                    ) : (
                      <>
                        <Tag className="w-5 h-5" />
                        Claim Offer
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className={`${cardClass} rounded-lg shadow-lg p-12 text-center`}>
            <Gift className={`w-16 h-16 ${subTextClass} mx-auto mb-4`} />
            <p className={`text-xl ${textClass} mb-2`}>No offers or events found</p>
            <p className={subTextClass}>Try selecting a different category</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className={`${cardClass} rounded-lg shadow-lg p-8 mt-8`}>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className={`text-2xl font-bold ${textClass} mb-2`}>Stay Updated!</h2>
              <p className={subTextClass}>Subscribe to get notified about exclusive offers and upcoming events</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className={`px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-amber-500 w-64`}
              />
              <button className={`${darkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-500 hover:bg-amber-600'} text-white font-semibold px-6 py-3 rounded-lg transition-colors`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}