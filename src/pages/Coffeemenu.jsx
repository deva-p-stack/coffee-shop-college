import { useState } from 'react';
import Navbar from "../components/Navbar";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";


import { Coffee, Moon, Sun, Search, Heart, ShoppingCart, Check } from 'lucide-react';

export default function CoffeeMenu({ darkMode, setDarkMode, cart, setCart }){

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState([]);
  
  const [toast, setToast] = useState(null);


  const menuItems = [
    { 
      id: 1, 
      name: 'Espresso', 
      category: 'Hot Coffee', 
      price: 120, 
      description: 'Rich and bold single shot', 
      ingredients: 'Coffee beans, Water',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop'
    },
    { 
      id: 2, 
      name: 'Americano', 
      category: 'Hot Coffee', 
      price: 140, 
      description: 'Espresso with hot water', 
      ingredients: 'Espresso, Hot water',
        image: "/coffee-shop-college/images/Americano.jpg"


    },
    { 
      id: 3, 
      name: 'Cappuccino', 
      category: 'Hot Coffee', 
      price: 160, 
      description: 'Espresso with steamed milk and foam', 
      ingredients: 'Espresso, Steamed milk, Milk foam',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop'
    },
    { 
      id: 4, 
      name: 'Latte', 
      category: 'Hot Coffee', 
      price: 170, 
      description: 'Espresso with steamed milk', 
      ingredients: 'Espresso, Steamed milk, Milk foam',
      image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop'
    },
    { 
      id: 5, 
      name: 'Mocha', 
      category: 'Hot Coffee', 
      price: 190, 
      description: 'Espresso with chocolate and steamed milk', 
      ingredients: 'Espresso, Chocolate, Steamed milk, Whipped cream',
       image: "/coffee-shop-college/images/mocha.jpg"

    },
    { 
      id: 6, 
      name: 'Caramel Macchiato', 
      category: 'Hot Coffee', 
      price: 200, 
      description: 'Vanilla, steamed milk, espresso, and caramel', 
      ingredients: 'Vanilla syrup, Steamed milk, Espresso, Caramel drizzle',
      image: "/coffee-shop-college/images/Caramel Macchiato.png"
    },
    { 
      id: 7, 
      name: 'Flat White', 
      category: 'Hot Coffee', 
      price: 170, 
      description: 'Espresso with microfoam milk', 
      ingredients: 'Espresso, Microfoam milk',
      image: "/coffee-shop-college/images//Flat White.png"
    },
    { 
      id: 8, 
      name: 'Turkish Coffee', 
      category: 'Hot Coffee', 
      price: 150, 
      description: 'Traditional finely ground coffee', 
      ingredients: 'Finely ground coffee, Water, Sugar (optional)',
      image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=300&fit=crop'
    },
    { 
      id: 9, 
      name: 'Cortado', 
      category: 'Hot Coffee', 
      price: 145, 
      description: 'Equal parts espresso and steamed milk', 
      ingredients: 'Espresso, Steamed milk',
           image: "/coffee-shop-college/images/Cortado.png"
    },
    { 
      id: 10, 
      name: 'Vienna Coffee', 
      category: 'Hot Coffee', 
      price: 180, 
      description: 'Espresso topped with whipped cream', 
      ingredients: 'Espresso, Whipped cream, Chocolate shavings',
             image: "/coffee-shop-college/images/Vienna Coffee.jpg"
    },
    { 
      id: 11, 
      name: 'Iced Coffee', 
      category: 'Cold Coffee', 
      price: 150, 
      description: 'Chilled brewed coffee over ice', 
      ingredients: 'Brewed coffee, Ice, Milk (optional)',
         image: "/coffee-shop-college/images/Iced Coffee.jpg"
    },
    { 
      id: 12, 
      name: 'Cold Brew', 
      category: 'Cold Coffee', 
      price: 160, 
      description: 'Smooth cold-steeped coffee', 
      ingredients: 'Cold brew concentrate, Water, Ice',
      image: "/coffee-shop-college/images/Cold Brew.png"
    },
    { 
      id: 13, 
      name: 'Iced Latte', 
      category: 'Cold Coffee', 
      price: 180, 
      description: 'Espresso with cold milk and ice', 
      ingredients: 'Espresso, Cold milk, Ice',
       image: "/coffee-shop-college/images/Iced Latte.jpg"
    },
    { 
      id: 14, 
      name: 'Iced Mocha', 
      category: 'Cold Coffee', 
      price: 200, 
      description: 'Iced espresso with chocolate', 
      ingredients: 'Espresso, Chocolate, Cold milk, Ice, Whipped cream',
      image: "/coffee-shop-college/images/Iced Mocha.jpg" 
    },
    { 
      id: 15, 
      name: 'Frappuccino', 
      category: 'Cold Coffee', 
      price: 220, 
      description: 'Blended coffee with ice and cream', 
      ingredients: 'Coffee, Ice, Milk, Sugar, Whipped cream',
      image: "/coffee-shop-college/images/Frappuccino.jpg"
    },
    { 
      id: 16, 
      name: 'Iced Americano', 
      category: 'Cold Coffee', 
      price: 155, 
      description: 'Espresso with cold water and ice', 
      ingredients: 'Espresso, Cold water, Ice',
       image: "/coffee-shop-college/images/Iced Americano.jpg"
    },
    { 
      id: 17, 
      name: 'Nitro Cold Brew', 
      category: 'Cold Coffee', 
      price: 190, 
      description: 'Cold brew infused with nitrogen', 
      ingredients: 'Cold brew, Nitrogen gas',
        image: "/coffee-shop-college/images/Nitro Cold Brew.jpg"
    },
    { 
      id: 18, 
      name: 'Vanilla Latte', 
      category: 'Specialty', 
      price: 185, 
      description: 'Latte with vanilla syrup', 
      ingredients: 'Espresso, Vanilla syrup, Steamed milk',
      image: "/coffee-shop-college/images/Vanilla Latte.jpg"
    },
    { 
      id: 19, 
      name: 'Hazelnut Latte', 
      category: 'Specialty', 
      price: 185, 
      description: 'Latte with hazelnut flavor', 
      ingredients: 'Espresso, Hazelnut syrup, Steamed milk',
          image: "/coffee-shop-college/images/Hazelnut Latte.jpg"
    },
    { 
      id: 20, 
      name: 'Pumpkin Spice Latte', 
      category: 'Specialty', 
      price: 210, 
      description: 'Seasonal favorite with pumpkin spice', 
      ingredients: 'Espresso, Pumpkin spice, Steamed milk, Whipped cream',
      image: "/coffee-shop-college/images/Pumpkin Spice Latte.jpg"
    },
    { 
      id: 21, 
      name: 'Affogato', 
      category: 'Specialty', 
      price: 230, 
      description: 'Espresso poured over vanilla ice cream', 
      ingredients: 'Espresso, Vanilla ice cream',
      image: "/coffee-shop-college/images/Affogato.jpg"
    },
    { 
      id: 22, 
      name: 'Irish Coffee', 
      category: 'Specialty', 
      price: 250, 
      description: 'Coffee with Irish whiskey and cream', 
      ingredients: 'Coffee, Irish whiskey, Brown sugar, Cream',
     image: "/coffee-shop-college/images/Irish Coffee.jpg"
      
    },
    { 
      id: 23, 
      name: 'Dalgona Coffee', 
      category: 'Specialty', 
      price: 175, 
      description: 'Whipped coffee over milk', 
      ingredients: 'Instant coffee, Sugar, Hot water, Milk',
          image: "/coffee-shop-college/images/Dalgona Coffee.jpg"
    },
    { 
      id: 24, 
      name: 'White Chocolate Mocha', 
      category: 'Specialty', 
      price: 205, 
      description: 'Mocha with white chocolate', 
      ingredients: 'Espresso, White chocolate, Steamed milk, Whipped cream',
      
      image: "/coffee-shop-college/images/White Chocolate Mocha.jpg"
    },
    { 
      id: 25, 
      name: 'Salted Caramel Latte', 
      category: 'Specialty', 
      price: 195, 
      description: 'Latte with salted caramel', 
      ingredients: 'Espresso, Salted caramel, Steamed milk',
     
     image: "/coffee-shop-college/images/Salted Caramel Latte.jpg"
    },
    { 
      id: 26, 
      name: 'Matcha Latte', 
      category: 'Non-Coffee', 
      price: 195, 
      description: 'Japanese green tea latte', 
      ingredients: 'Matcha powder, Steamed milk, Sugar',
     
       image: "/coffee-shop-college/images/Matcha Latte.jpg"
    },
    { 
      id: 27, 
      name: 'Hot Chocolate', 
      category: 'Non-Coffee', 
      price: 160, 
      description: 'Rich chocolate with steamed milk', 
      ingredients: 'Cocoa powder, Chocolate, Steamed milk, Whipped cream',
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop'
    },
    { 
      id: 28, 
      name: 'Chai Latte', 
      category: 'Non-Coffee', 
      price: 175, 
      description: 'Spiced tea with steamed milk', 
      ingredients: 'Chai tea, Spices, Steamed milk, Honey',
      

      
       image: "/coffee-shop-college/images/Chai Latte.jpg"
    },
    { 
      id: 29, 
      name: 'London Fog', 
      category: 'Non-Coffee', 
      price: 165, 
      description: 'Earl Grey tea latte with vanilla', 
      ingredients: 'Earl Grey tea, Vanilla, Steamed milk',
   
      
       image: "/coffee-shop-college/images/London Fog.jpg"
      
    },
    { 
      id: 30, 
      name: 'Golden Milk Latte', 
      category: 'Non-Coffee', 
      price: 180, 
      description: 'Turmeric latte with warm spices', 
      ingredients: 'Turmeric, Ginger, Cinnamon, Steamed milk, Honey',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop'
    }
  ];

  const categories = ['All', 'Hot Coffee', 'Cold Coffee', 'Specialty', 'Non-Coffee'];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // add to cart function
const addToCart = (item) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // If item already in cart → increase quantity
      return prevCart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      // If new item → add with quantity 1
      return [
        ...prevCart,
        {
          id: item.id,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: 1
        }
      ];
    }
  });

  setToast(`${item.name} added to cart`);

  setTimeout(() => {
    setToast(null);
  }, 3000);
};

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-amber-50';
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const subTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';
  const inputClass = darkMode 
    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300   `}>
      
      <div className="max-w-7xl mx-auto p-4 md:p-8 ">
        {/* Header */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mb-6`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-3 rounded-full`}>
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${textClass}`}>Our Menu</h1>
                <p className={subTextClass}>30 Handcrafted beverages to choose from</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* added to cart item */}
              
             <div className="relative cursor-pointer" onClick={() => navigate("/cart")} >
              <ShoppingCart className={`w-6 h-6 ${textClass}`} />
               {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
               </span>
              )}
            </div>



              {/* dark mode and the light mode  */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${subTextClass}`} />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
            />
          </div>
        </div>
        {/* product add to cart pop message  */}
        {toast && (
         <div className="fixed top-25 right-5 z-50 animate-slideIn">
          <div className="flex items-center bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden w-80">
      
              {/* Left Green Bar */}
                <div className="bg-green-500 w-2 h-full"></div>

             {/* Content */}
                      <div className="flex items-center gap-3 p-4">
                      <div className="bg-green-500 p-2 rounded-full">
                      <Check className="w-5 h-5 text-white" />
                         </div>
                            <p className="text-gray-800 dark:text-gray-100 font-semibold">
                            {toast}
                          </p>
                        </div>
                             </div>
                        </div>
                      )}

        {/* Category Filter */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? darkMode 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-amber-500 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`${cardClass} rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(item.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
                <div className="absolute bottom-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    darkMode ? 'bg-gray-900 bg-opacity-80 text-gray-200' : 'bg-white bg-opacity-90 text-gray-800'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`text-xl font-bold ${textClass} mb-2`}>{item.name}</h3>
                <p className={`${subTextClass} text-sm mb-3`}>{item.description}</p>
                
                {/* Ingredients */}
                <div className="mb-4">
                  <p className={`text-xs font-semibold ${darkMode ? 'text-amber-500' : 'text-amber-600'} mb-1`}>
                    Ingredients:
                  </p>
                  <p className={`text-xs ${subTextClass}`}>{item.ingredients}</p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-bold ${darkMode ? 'text-amber-500' : 'text-amber-600'}`}>
                    ₹{item.price}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className={`w-full ${darkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-500 hover:bg-amber-600'} text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className={`${cardClass} rounded-lg shadow-lg p-12 text-center`}>
            <Coffee className={`w-16 h-16 ${subTextClass} mx-auto mb-4`} />
            <p className={`text-xl ${textClass}`}>No items found</p>
            <p className={subTextClass}>Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
        
  );
}