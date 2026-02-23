
import { Coffee, Moon, Sun, MapPin, Clock, Phone, Mail, Star, Award, Users, Heart, ArrowRight, Menu } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState,useMemo } from "react";
import { reviews } from "./Reviewdata";

import Hero from "../components/Hero";






 export default function Home({ darkMode, setDarkMode }){

// title desctition 
  useEffect(() => {
    document.title = "Bean Haven | Home";
  }, []);


  // Auto Detect Open / Closed
const getStoreStatus = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hour + minutes / 60;

  let openTime, closeTime;

  if (day >= 1 && day <= 5) {
    // Monday - Friday
    openTime = 7;
    closeTime = 22;
  } else {
    // Saturday & Sunday
    openTime = 8;
    closeTime = 23;
  }

  return currentTime >= openTime && currentTime < closeTime;
};

  const getClosingTimeRemaining = () => {
  const now = new Date();
  const day = now.getDay();

  let closeHour;

  if (day >= 1 && day <= 5) {
    closeHour = 22;
  } else {
    closeHour = 23;
  }

  const closing = new Date();
  closing.setHours(closeHour, 0, 0, 0);

  const diff = closing.getTime() - now.getTime();

 if (diff <= 0) return "Closing...";

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `${hours}h ${minutes}m left`;
};

const [isOpen, setIsOpen] = useState(() => getStoreStatus());
const [timeLeft, setTimeLeft] = useState("");







  const navigate = useNavigate();

   // Show only first 3 reviews
  const topReviews = reviews.slice(0, 3);

  // home page image slider image  
const heroImages = useMemo(() => [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1507915135761-41a0a222c709?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=1600&h=900&fit=crop"
], []);


const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, 4000); // change every 4 seconds

  return () => clearInterval(interval);
}, [heroImages.length]);

// scroll toop button
const [showTop, setShowTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowTop(window.scrollY > 400);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // only for review section 
   const textClass = darkMode ? "text-gray-100" : "text-gray-900";
  const subTextClass = darkMode ? "text-gray-400" : "text-gray-600";
  const cardClass = darkMode ? "bg-gray-800" : "bg-white";
  const bgClass = darkMode ? "bg-gray-900" : "bg-amber-50";

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
  { label: 'Years of Excellence', value: 9, suffix: '+' },
  { label: 'Cups Daily', value: 1000, suffix: '+' },
  { label: 'Happy Customers', value: 50000, suffix: '+' },
  { label: 'Google Rating', value: 4.8, suffix: '★' }
];
  const [counts, setCounts] = useState(stats.map(() => 0));

  

useEffect(() => {
  const updateStatus = () => {
    const open = getStoreStatus();
    setIsOpen(open);

    if (open) {
      setTimeLeft(getClosingTimeRemaining());
    } else {
      setTimeLeft("");
    }
  };

  updateStatus();
  const interval = setInterval(updateStatus, 60000);

  return () => clearInterval(interval);
}, []);





useEffect(() => {
  const interval = setInterval(() => {
    setCounts(prev => {
      const updated = prev.map((val, i) => {
        const target = stats[i].value;
        if (val < target) {
          const increment = target / 50;
          return Math.min(val + increment, target);
        }
        return target;
      });

      const done = updated.every((val, i) => val === stats[i].value);
  if (done) {
  clearInterval(interval);
}
      return updated;
    });
  }, 40);

  return () => clearInterval(interval);
}, []);



  return (
    <div className={`min-h-screen ${t.bg} transition-colors duration-300`}>
    

      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative h-screen overflow-hidden">

  {/* Background Slider */}
  <div className="absolute inset-0">
    {heroImages.map((img, index) => (
      <img    loading="eager"
        key={index}
        src={img}
        alt="Coffee Shop"
        className={`absolute inset-0 w-full h-full object-cover transition-all ease-in-out  duration-[3000ms] ${
          index === current ?  "opacity-100 scale-105": "opacity-0 scale-100"
        }`}
      />
    ))}

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
    <div className="text-white max-w-2xl space-y-6">
{/*  */}

<Hero />



    <div className="flex flex-col sm:flex-row gap-4   w-full sm:w-auto sm:justify-start">

       
        <button
          onClick={() => navigate("/menu")}
          className="bg-amber-500 hover:bg-amber-600
                     px-8 py-3 rounded-full
                     font-semibold text-white
                     shadow-xl hover:shadow-2xl
                     transition-all duration-300
                     hover:-translate-y-1 cursor-pointer"
       
        >
          Order Now
        </button>

        <button
          onClick={() => navigate("/contact")}
          className="border border-white/60 
                     px-8 py-3 rounded-full
                     font-semibold
                     text-white
                     hover:bg-white/10
                     transition-all duration-300 cursor-pointer"
        >
          Visit Us
        </button>

      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 ">
    <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white mt-2 rounded-full animate-bounce" />
    </div>
  </div>

</section>

{/* Opening Hours & Location */}
<section className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 mt-20 md:mt-28">
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

    {/* ================= Opening Hours Card ================= */}
    <div
      className={`
        ${t.card}
        relative
        rounded-2xl sm:rounded-3xl
        p-6 sm:p-8 lg:p-10
        border ${t.border}
        bg-white/70 dark:bg-white/5
        backdrop-blur-2xl
        shadow-md sm:shadow-lg
        transition-all duration-500
        lg:hover:shadow-2xl lg:hover:-translate-y-2
      `}
    >

      {/* Responsive Status Badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <span
          className={`
            px-3 sm:px-4
            py-1.5
            text-[10px] sm:text-xs
            font-semibold tracking-wide
            rounded-full
            shadow-md
            whitespace-nowrap
            ${isOpen ? "bg-green-500 text-white" : "bg-red-500 text-white"}
          `}
        >
          {isOpen ? `OPEN • ${timeLeft}` : "CLOSED"}
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className={`${t.iconAccent} p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg`}>
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>

        <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${t.text}`}>
          Opening Hours
        </h3>
      </div>

      {/* Hours List */}
      <div className="space-y-4 sm:space-y-5">
        {[
          { day: "Monday - Friday", time: "7:00 AM - 10:00 PM" },
          { day: "Saturday", time: "8:00 AM - 11:00 PM" },
          { day: "Sunday", time: "8:00 AM - 11:00 PM" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 group"
          >
            <span className={`text-sm sm:text-base font-medium ${t.text}`}>
              {item.day}
            </span>

            <span className="text-xs sm:text-sm font-semibold text-amber-500 group-hover:translate-x-1 transition">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* ================= Location Card ================= */}
    <div
      className={`
        ${t.card}
        relative
        rounded-2xl sm:rounded-3xl
        p-6 sm:p-8 lg:p-10
        border ${t.border}
        bg-white/70 dark:bg-white/5
        backdrop-blur-2xl
        shadow-md sm:shadow-lg
        transition-all duration-500
        lg:hover:shadow-2xl lg:hover:-translate-y-2
      `}
    >

      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className={`${t.iconAccent} p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg`}>
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>

        <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${t.text}`}>
          Visit Our Café
        </h3>
      </div>

      <div className="space-y-6">

        <div>
          <p className={`text-base sm:text-lg font-semibold ${t.text}`}>
            123 Coffee Street
          </p>
          <p className={`${t.subText} text-sm mt-1`}>
            Bean City, Tamil Nadu - 632014
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-3 text-sm font-medium hover:text-amber-500 transition"
          >
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>

          <a
            href="mailto:hello@coffeeshop.com"
            className="flex items-center gap-3 text-sm font-medium hover:text-amber-500 transition"
          >
            <Mail className="w-4 h-4" />
            hello@coffeeshop.com
          </a>
        </div>

        <button
          className="w-full mt-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl
                     bg-gradient-to-r from-amber-500 to-orange-500
                     hover:from-amber-600 hover:to-orange-600
                     text-white font-semibold
                     shadow-lg hover:shadow-xl
                     transition-all duration-300
                     active:scale-95"
        >
          Get Directions
        </button>

      </div>
    </div>

  </div>
</section>



      {/* Features */}
   <section className="relative py-20 overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-transparent to-orange-200/30 dark:from-amber-900/20 dark:to-orange-900/20" />

  <div className="relative max-w-7xl mx-auto px-4">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-extrabold ${t.text} mb-4`}>
        Why Choose Bean Haven?
      </h2>
      <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
      <p className={`text-lg md:text-xl ${t.subText}`}>
        More than just coffee — it's an experience
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={index}
            className={`
              group relative ${t.card} 
              backdrop-blur-lg
              border border-gray-200 dark:border-gray-700
              rounded-2xl p-10 text-center
              shadow-lg hover:shadow-2xl
              transition-all duration-500
              hover:-translate-y-3
            `}
          >
            {/* Icon Circle */}
            <div
              className={`
                ${t.iconAccent}
                w-20 h-20 rounded-full 
                flex items-center justify-center
                mx-auto mb-6
                transition-all duration-500
                group-hover:scale-110
                shadow-md
              `}
            >
              <Icon className="w-9 h-9 text-white" />
            </div>

            {/* Title */}
            <h3 className={`text-2xl font-bold ${t.text} mb-4`}>
              {feature.title}
            </h3>

            {/* Description */}
            <p className={`${t.subText} leading-relaxed`}>
              {feature.description}
            </p>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-500 transition-all duration-500 pointer-events-none"></div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Stats */}
<section className="relative py-20 overflow-hidden">

  {/* Gradient Background */}
  <div className={`absolute inset-0 ${
    darkMode
      ? "bg-gradient-to-br from-amber-700 via-orange-700 to-amber-800"
      : "bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600"
  }`} />

  {/* Decorative Blur Glow */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      {stats.map((stat, index) => (
        <div
          key={index}
          className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center 
                     border border-white/20 
                     transition-all duration-500 
                     hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Value */}
          <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 
                          transition-all duration-500 group-hover:scale-110">
          {stat.value % 1 !== 0
  ? counts[index] % 1 !== 0
  ? counts[index].toFixed(1)
  : counts[index]
  : Math.floor(counts[index])}
{stat.suffix}
          </div>

          {/* Divider */}
          <div className="w-12 h-1 bg-white/50 mx-auto mb-4 rounded-full"></div>

          {/* Label */}
          <div className="text-white/90 text-sm md:text-base tracking-wide">
            {stat.label}
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* review section  */}

<section className={`${bgClass} py-20 transition-colors duration-500`}>
  <div className="max-w-6xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-extrabold ${textClass}`}>
        What Our Customers Say
      </h2>
      <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
      <p className={`mt-6 text-lg ${subTextClass}`}>
        Real reviews from real coffee lovers ☕
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {topReviews.map((review) => (
        <div
          key={review.id}
          className={`
            relative p-8 rounded-2xl backdrop-blur-lg
            ${cardClass}
            border border-amber-200/20
            shadow-xl
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all duration-300
          `}
        >
          {/* Quote Icon */}
          <div className="absolute -top-5 left-6 bg-amber-500 text-white p-3 rounded-full shadow-lg">
            <Star className="w-5 h-5" />
          </div>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6 mt-4">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
            />
            <div>
              <h3 className={`font-bold text-lg ${textClass}`}>
                {review.name}
              </h3>

              {/* Rating */}
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? "fill-amber-400 text-amber-400"
                        : darkMode
                        ? "text-gray-600"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className={`${subTextClass} text-sm leading-relaxed italic`}>
            “
            {review.review.length > 140
              ? review.review.slice(0, 140) + "..."
              : review.review}
            ”
          </p>
        </div>
      ))}
    </div>

    {/* Button */}
    <div className="text-center mt-14">
      <button
        onClick={() => navigate("/reviews")}
        className="
          bg-gradient-to-r from-amber-500 to-orange-500
          hover:from-amber-600 hover:to-orange-600
          text-white
          px-8 py-3
          rounded-full
          font-semibold
          shadow-lg
          hover:shadow-xl
          transition-all duration-300
          transform hover:scale-105
          cursor-pointer
        "
      >
        View All Reviews →
      </button>
    </div>

  </div>
</section>

{showTop && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-8 right-8 bg-amber-500 text-white p-4 rounded-full shadow-xl hover:bg-amber-600 transition"
  >
    ↑
  </button>)}
    </div>
  );
}