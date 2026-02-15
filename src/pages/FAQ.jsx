import { useState } from 'react';
import { ChevronDown, Clock, MapPin, Wifi, Heart, Coffee, CreditCard, Phone, Mail, Calendar, PawPrint, Utensils, Gift, Users, Moon, Sun, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [darkMode, setDarkMode] = useState(false);
  const [openItems, setOpenItems] = useState([0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      id: 0,
      category: 'hours',
      icon: Clock,
      question: 'What are your opening hours?',
      answer: 'We are open Monday to Friday: 7:00 AM - 10:00 PM, Saturday & Sunday: 8:00 AM - 11:00 PM. We are closed on major public holidays. Our extended hours on weekends make us perfect for late-night study sessions or evening hangouts!'
    },
    {
      id: 1,
      category: 'parking',
      icon: MapPin,
      question: 'Is parking available?',
      answer: 'Yes! We offer free parking for all customers in our dedicated parking lot with 50+ spaces. The parking lot is located behind our building and is well-lit and secure. We also have 3 designated EV charging stations available on a first-come, first-served basis.'
    },
    {
      id: 2,
      category: 'wifi',
      icon: Wifi,
      question: 'Do you offer free Wi-Fi?',
      answer: 'Absolutely! We provide complimentary high-speed Wi-Fi to all our customers. The network name is "CoffeeShop_Guest" and the password is available on your receipt or you can ask any of our baristas. We also have plenty of power outlets throughout the cafe for charging your devices.'
    },
    {
      id: 3,
      category: 'pets',
      icon: PawPrint,
      question: 'Are you pet-friendly?',
      answer: 'Yes, we love furry friends! Well-behaved dogs are welcome in our outdoor seating area. We ask that pets remain leashed at all times and that owners clean up after them. We even offer complimentary water bowls and occasional dog treats. Service animals are welcome throughout the entire establishment.'
    },
    {
      id: 4,
      category: 'custom',
      icon: Coffee,
      question: 'Do you take custom orders?',
      answer: 'Of course! We are happy to customize any drink to your preference. You can adjust sweetness levels, milk types (dairy, oat, almond, soy), add extra shots, flavored syrups, or request specific temperatures. Just let our baristas know your preferences and we will make it perfect for you!'
    },
    {
      id: 5,
      category: 'payment',
      icon: CreditCard,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, UPI payments (Google Pay, PhonePe, Paytm), contactless payments, and of course, cash. We also have our own mobile app where you can pre-order and pay for faster service.'
    },
    {
      id: 6,
      category: 'dietary',
      icon: Utensils,
      question: 'Do you have vegan and gluten-free options?',
      answer: 'Yes! We offer a variety of plant-based milk alternatives (oat, almond, soy, coconut) at no extra charge. We also have vegan pastries, sandwiches, and snacks. For gluten-free options, we have several items clearly marked on our menu. Please inform our staff of any allergies or dietary restrictions.'
    },
    {
      id: 7,
      category: 'reservations',
      icon: Calendar,
      question: 'Do you take reservations?',
      answer: 'We operate on a first-come, first-served basis for regular seating. However, we do accept reservations for our private event space which can accommodate up to 30 people. This space is perfect for meetings, small parties, or gatherings. Please call us at least 48 hours in advance to book.'
    },
    {
      id: 8,
      category: 'loyalty',
      icon: Gift,
      question: 'Do you have a loyalty program?',
      answer: 'Yes! Join our Coffee Rewards program for free. Earn 1 point for every ₹100 spent. Collect 100 points to redeem for a free drink of your choice. Members also get exclusive access to new menu items, birthday rewards, and special promotional offers. Sign up in-store or through our mobile app.'
    },
    {
      id: 9,
      category: 'contact',
      icon: Phone,
      question: 'How can I contact you?',
      answer: 'You can reach us at: Phone: +91 98765 43210, Email: hello@coffeeshop.com, or visit us at 123 Coffee Street, Bean City, CA 90210. Follow us on Instagram @CoffeeShop and Facebook for daily updates, new menu items, and special promotions!'
    },
    {
      id: 10,
      category: 'events',
      icon: Users,
      question: 'Do you host events?',
      answer: 'Yes! We regularly host coffee tasting events, latte art workshops, and open mic nights. We also offer our space for private events, corporate meetings, and celebrations. Check our social media or ask in-store for upcoming events. Private event bookings require advance notice.'
    },
    {
      id: 11,
      category: 'delivery',
      icon: Coffee,
      question: 'Do you offer delivery or takeaway?',
      answer: 'Yes to both! We offer takeaway for all menu items. For delivery, we partner with major food delivery platforms including Swiggy, Zomato, and our own mobile app. Delivery is available within a 5km radius. Minimum order value applies for delivery orders.'
    },
    {
      id: 12,
      category: 'seating',
      icon: Users,
      question: 'What seating options do you have?',
      answer: 'We have a variety of seating options to suit your needs: comfortable couches for relaxing, individual tables for solo work, communal tables for groups, outdoor patio seating, and a quiet corner for focused work. We have seating for approximately 80 people indoors and 30 outdoors.'
    },
    {
      id: 13,
      category: 'beans',
      icon: Coffee,
      question: 'Can I buy coffee beans to take home?',
      answer: 'Absolutely! We sell our premium coffee beans in whole bean or ground form. Choose from our signature blends or single-origin varieties. Available in 250g, 500g, and 1kg bags. We can also grind the beans to your preferred coarseness. Ask our baristas for recommendations!'
    },
    {
      id: 14,
      category: 'employment',
      icon: HelpCircle,
      question: 'Are you hiring?',
      answer: 'We are always looking for passionate coffee lovers to join our team! Current openings are posted on our website and social media. You can also drop off your resume in-store or email it to careers@coffeeshop.com. We offer competitive wages, flexible schedules, and employee discounts.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Questions', icon: HelpCircle },
    { value: 'hours', label: 'Hours & Location', icon: Clock },
    { value: 'parking', label: 'Parking', icon: MapPin },
    { value: 'wifi', label: 'Wi-Fi & Amenities', icon: Wifi },
    { value: 'pets', label: 'Pet Policy', icon: PawPrint },
    { value: 'custom', label: 'Custom Orders', icon: Coffee },
    { value: 'payment', label: 'Payment', icon: CreditCard },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-amber-50';

const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
const subTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';


const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';

const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
const inputClass = darkMode
  ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500';


  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300 p-4 md:p-8`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mb-6`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-3 rounded-full`}>
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${textClass}`}>Frequently Asked Questions</h1>
                <p className={subTextClass}>Everything you need to know about our coffee shop</p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <HelpCircle className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${subTextClass}`} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
            />
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className={`${cardClass} rounded-lg shadow-lg p-5 text-center`}>
            <Clock className={`w-8 h-8 ${darkMode ? 'text-amber-500' : 'text-amber-600'} mx-auto mb-3`} />
            <h3 className={`font-bold ${textClass} mb-1`}>Opening Hours</h3>
            <p className={`text-sm ${subTextClass}`}>Mon-Fri: 7 AM - 10 PM</p>
            <p className={`text-sm ${subTextClass}`}>Sat-Sun: 8 AM - 11 PM</p>
          </div>
          
          <div className={`${cardClass} rounded-lg shadow-lg p-5 text-center`}>
            <Wifi className={`w-8 h-8 ${darkMode ? 'text-amber-500' : 'text-amber-600'} mx-auto mb-3`} />
            <h3 className={`font-bold ${textClass} mb-1`}>Free Wi-Fi</h3>
            <p className={`text-sm ${subTextClass}`}>High-speed internet</p>
            <p className={`text-sm ${subTextClass}`}>Available for all customers</p>
          </div>
          
          <div className={`${cardClass} rounded-lg shadow-lg p-5 text-center`}>
            <PawPrint className={`w-8 h-8 ${darkMode ? 'text-amber-500' : 'text-amber-600'} mx-auto mb-3`} />
            <h3 className={`font-bold ${textClass} mb-1`}>Pet Friendly</h3>
            <p className={`text-sm ${subTextClass}`}>Dogs welcome in</p>
            <p className={`text-sm ${subTextClass}`}>outdoor seating area</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.value
                    ? darkMode 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-amber-500 text-white'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map(faq => {
            const Icon = faq.icon;
            const isOpen = openItems.includes(faq.id);
            
            return (
              <div key={faq.id} className={`${cardClass} rounded-lg shadow-lg overflow-hidden`}>
                <button
                  onClick={() => toggleItem(faq.id)}
                  className={`w-full p-5 flex items-center justify-between text-left transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-2 rounded-full flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className={`font-bold ${textClass} text-lg`}>{faq.question}</h3>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 ${subTextClass} flex-shrink-0 transition-transform ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isOpen && (
                  <div className={`px-5 pb-5 ${subTextClass} border-t ${borderClass}`}>
                    <p className="pt-4 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className={`${cardClass} rounded-lg shadow-lg p-12 text-center`}>
            <HelpCircle className={`w-16 h-16 ${subTextClass} mx-auto mb-4`} />
            <p className={`text-xl ${textClass} mb-2`}>No questions found</p>
            <p className={subTextClass}>Try adjusting your search or category filter</p>
          </div>
        )}

        {/* Contact Card */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mt-6`}>
          <h2 className={`text-2xl font-bold ${textClass} mb-4 text-center`}>
            Still have questions?
          </h2>
          <p className={`${subTextClass} text-center mb-6`}>
            Can't find the answer you're looking for? Feel free to reach out to us directly!
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="tel:+919876543210"
              className={`flex items-center justify-center gap-3 ${darkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-500 hover:bg-amber-600'} text-white font-semibold py-3 px-6 rounded-lg transition-colors`}
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
            <a
              href="mailto:hello@coffeeshop.com"
              className={`flex items-center justify-center gap-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${textClass} font-semibold py-3 px-6 rounded-lg transition-colors`}
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}