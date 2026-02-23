import { useState } from 'react';
import { Star, ThumbsUp, MessageSquare, Filter, Search, Moon, Sun, Coffee, Calendar } from 'lucide-react';
// import { useNavigate } from "react-router-dom";

export default function Reviews({ darkMode, setDarkMode }) {
 


  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      avatar: "/coffee-shop-college/images/priya.jpg",
      rating: 5,
      date: '2024-01-28',
      review: 'Absolutely love this place! The Caramel Macchiato is to die for. The ambiance is cozy and perfect for working. Staff is super friendly and the Wi-Fi is fast. Will definitely come back!',
      helpful: 24,
      source: 'Google',
      verified: true,
      images: ['https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop']
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      date: '2024-01-26',
      review: 'Best coffee shop in town! Their cold brew is exceptional and the baristas really know their craft. The seating is comfortable and the music creates a great atmosphere. Highly recommended!',
      helpful: 18,
      source: 'Google',
      verified: true,
      images: ['https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop']
    },
    {
      id: 3,
      name: 'Ananya Patel',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 4,
      date: '2024-01-25',
      review: 'Great coffee and pastries. The latte art is beautiful and tastes amazing. Only downside is it can get a bit crowded during peak hours. Otherwise, fantastic experience!',
      helpful: 15,
      source: 'Google',
      verified: true,
      images: []
    },
    {
      id: 4,
      name: 'Vikram Singh',
      avatar: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      date: '2024-01-24',
      review: 'This has become my go-to spot for morning coffee. The espresso is perfect every single time. The staff remembers my order which is a nice touch. Clean, modern, and great service!',
      helpful: 22,
      source: 'Google',
      verified: true,
      images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop']
    },
    {
      id: 5,
      name: 'Neha Reddy',
      avatar: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      date: '2024-01-23',
      review: 'Amazing cappuccino and the croissants are fresh and delicious! Love the outdoor seating area. Perfect place to meet friends or just relax with a book. Five stars!',
      helpful: 19,
      source: 'Google',
      verified: true,
      images: ['https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop']
    },
    {
      id: 6,
      name: 'Arjun Mehta',
      avatar: 'https://i.pravatar.cc/150?img=14',
      rating: 4,
      date: '2024-01-22',
      review: 'Solid coffee shop with a good variety of drinks. The matcha latte is excellent. Prices are reasonable and the portions are generous. Would give 5 stars if parking was easier.',
      helpful: 12,
      source: 'Google',
      verified: true,
      images: []
    },
    {
      id: 7,
      name: 'Kavya Iyer',
      avatar: 'https://i.pravatar.cc/150?img=16',
      rating: 5,
      date: '2024-01-21',
      review: 'Hands down the best flat white I\'ve had in India! The coffee beans are high quality and you can taste the difference. The staff is knowledgeable and passionate about coffee.',
      helpful: 28,
      source: 'Google',
      verified: true,
      images: ['https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop']
    },
    {
      id: 8,
      name: 'Siddharth Jain',
      avatar: 'https://i.pravatar.cc/150?img=15',
      rating: 4,
      date: '2024-01-20',
      review: 'Expected better based on reviews. Coffee was average and overpriced. Service was slow and they got my order wrong twice. The place looks nice but needs improvement on execution.',
      helpful: 16,
      source: 'Google',
      verified: true,
      images: []
    },
    {
      id: 9,
      name: 'Divya Nair',
      avatar: 'https://i.pravatar.cc/150?img=20',
      rating: 4,
      date: '2024-01-19',
      review: 'Love the variety of coffee options. The Turkish coffee is authentic and delicious. Ambiance is great for studying. Sometimes service can be slow during rush hours but worth the wait!',
      helpful: 11,
      source: 'Google',
      verified: true,
      images: ['https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=300&fit=crop']
    },
    {
      id: 10,
      name: 'Rahul Gupta',
      avatar: 'https://i.pravatar.cc/150?img=17',
      rating: 5,
      date: '2024-01-18',
      review: 'Exceptional quality coffee and friendly staff. The mocha is rich and not too sweet. Clean bathrooms, good music, and a welcoming atmosphere. This place has everything!',
      helpful: 20,
      source: 'Google',
      verified: true,
      images: []
    },
    {
      id: 11,
      name: 'Meera Krishnan',
      avatar: 'https://i.pravatar.cc/150?img=25',
      rating: 3,
      date: '2024-01-17',
      review: 'Decent coffee but nothing extraordinary. The chai latte was okay but could be better. Nice ambiance though. Prices are on the higher side for what you get. Might give it another try.',
      helpful: 14,
      source: 'Google',
      verified: true,
      images: ['https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop']
    },
    {
      id: 12,
      name: 'Karan Malhotra',
      avatar: 'https://i.pravatar.cc/150?img=18',
      rating: 1,
      date: '2024-01-16',
      review: 'Very disappointed with the experience. Coffee was bitter and burnt. Staff seemed uninterested and the place was dirty. Way too expensive for the quality. Would not recommend.',
      helpful: 9,
      source: 'Google',
      verified: false,
      images: []
    },
    {
      id: 13,
      name: 'Isha Verma',
      avatar: 'https://i.pravatar.cc/150?img=26',
      rating: 5,
      date: '2024-01-15',
      review: 'Absolutely fantastic! The affogato is heavenly. Love the modern interior design and the comfortable seating. Perfect for a coffee date or solo work session. Will be back soon!',
      helpful: 21,
      source: 'Google',
      verified: true,
      images: ['https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop']
    },
    {
      id: 14,
      name: 'Aditya Rao',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 2,
      date: '2024-01-14',
      review: 'Not impressed. The latte was lukewarm and tasteless. Limited seating and very noisy. For the price, I expected much better quality. Customer service needs serious improvement.',
      helpful: 7,
      source: 'Google',
      verified: true,
      images: []
    },
    {
      id: 15,
      name: 'Sneha Desai',
      avatar: 'https://i.pravatar.cc/150?img=47',
      rating: 3,
      date: '2024-01-13',
      review: 'It\'s okay. Coffee is average, nothing special. The pastries were fresh which was nice. Might come back if I\'m in the area but wouldn\'t go out of my way for it.',
      helpful: 5,
      source: 'Google',
      verified: true,
      images: ['https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&h=300&fit=crop']
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.review.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = filterRating === 'all' || review.rating === parseInt(filterRating);
    return matchesSearch && matchesRating;
  }).sort((a, b) => {
    if (sortBy === 'recent') return new Date(b.date) - new Date(a.date);
    if (sortBy === 'helpful') return b.helpful - a.helpful;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(r => r.rating === rating).length
  );

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
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${textClass}`}>Customer Reviews</h1>
                <p className={subTextClass}>See what our customers are saying</p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 cursor-pointer rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Stats */}
          <div className="space-y-6">
            {/* Overall Rating */}
            <div className={`${cardClass} rounded-lg shadow-lg p-6`}>
              <h2 className={`text-xl font-bold ${textClass} mb-4`}>Overall Rating</h2>
              <div className="text-center mb-4">
                <div className={`text-6xl font-bold ${darkMode ? 'text-amber-500' : 'text-amber-600'} mb-2`}>
                  {averageRating}
                </div>
                <div className="flex justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${
                        star <= Math.round(averageRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : darkMode ? 'text-gray-600' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className={subTextClass}>Based on {reviews.length} reviews</p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className={`text-sm ${textClass} w-8`}>{rating} ★</span>
                    <div className={`flex-1 h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                      <div
                        className={`h-full ${darkMode ? 'bg-amber-600' : 'bg-amber-500'}`}
                        style={{ width: `${(ratingCounts[index] / reviews.length) * 100}%` }}
                      />
                    </div>
                    <span className={`text-sm ${subTextClass} w-8`}>{ratingCounts[index]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className={`${cardClass} rounded-lg shadow-lg p-6`}>
              <h2 className={`text-xl font-bold ${textClass} mb-4 flex items-center gap-2`}>
                <Filter className="w-5 h-5" />
                Filters
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium ${textClass} mb-2`}>
                    Rating
                  </label>
                  <select
                    value={filterRating}
                    onChange={(e) => setFilterRating(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${textClass} mb-2`}>
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  >
                    <option value="recent">Most Recent</option>
                    <option value="helpful">Most Helpful</option>
                    <option value="rating">Highest Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Google Reviews Badge */}
            <div className={`${cardClass} rounded-lg shadow-lg p-6 text-center`}>
              <Coffee className={`w-12 h-12 ${darkMode ? 'text-amber-500' : 'text-amber-600'} mx-auto mb-3`} />
              <h3 className={`text-lg font-bold ${textClass} mb-2`}>Find us on Google</h3>
              <p className={`text-sm ${subTextClass} mb-4`}>Read more reviews on our Google Business page</p>
              <button className={`w-full ${darkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-500 hover:bg-amber-600'} text-white font-semibold py-2 rounded-lg transition-colors`}>
                View on Google
              </button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-4">
            {/* Search */}
            <div className={`${cardClass} rounded-lg shadow-lg p-4`}>
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${subTextClass}`} />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                />
              </div>
            </div>

            {/* Reviews */}
            {filteredReviews.map(review => (
              <div key={review.id} className={`${cardClass} rounded-lg shadow-lg p-6`}>
                <div className="flex items-start gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className={`font-bold ${textClass} flex items-center gap-2`}>
                          {review.name}
                          {review.verified && (
                            <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                              Verified
                            </span>
                          )}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : darkMode ? 'text-gray-600' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className={`text-sm ${subTextClass}`}>·</span>
                          <span className={`text-sm ${subTextClass} flex items-center gap-1`}>
                            <Calendar className="w-3 h-3" />
                            {new Date(review.date).toLocaleDateString('en-IN', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {review.source}
                      </div>
                    </div>

                    <p className={`${textClass} mb-4 leading-relaxed`}>
                      {review.review}
                    </p>

                    {/* Review Images */}
                    {review.images && review.images.length > 0 && (
                      <div className={`grid ${review.images.length === 1 ? 'grid-cols-1' : review.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2 mb-4`}>
                        {review.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Review image ${idx + 1}`}
                            className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                          />
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-4">
                      <button className={`flex items-center gap-2 text-sm ${subTextClass} hover:${darkMode ? 'text-amber-500' : 'text-amber-600'} transition-colors`}>
                        <ThumbsUp className="w-4 h-4" />
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredReviews.length === 0 && (
              <div className={`${cardClass} rounded-lg shadow-lg p-12 text-center`}>
                <MessageSquare className={`w-16 h-16 ${subTextClass} mx-auto mb-4`} />
                <p className={`text-xl ${textClass}`}>No reviews found</p>
                <p className={subTextClass}>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}