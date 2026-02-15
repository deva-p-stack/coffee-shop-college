import { useState, useEffect } from 'react';

import { Plus, Minus, MapPin, Sun, Moon , Home, Briefcase, Edit2, Trash2, X } from 'lucide-react';

export default function Cart({ darkMode, setDarkMode, cart, setCart }){

 
 const [addresses, setAddresses] = useState(() => {
  const savedAddresses = localStorage.getItem('addresses');
  return savedAddresses
    ? JSON.parse(savedAddresses)
    : [
     
      ];
});

  
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [formData, setFormData] = useState({
    type: 'home',
    street: '',
    city: '',
    zipCode: ''
  });



// Save addresses whenever they change
useEffect(() => {
  localStorage.setItem('addresses', JSON.stringify(addresses));
}, [addresses]);

// update the address whenever they change

const [selectedAddress, setSelectedAddress] = useState(() => {
  const savedSelected = localStorage.getItem('selectedAddress');
  return savedSelected ? JSON.parse(savedSelected) : 1;
});

// add gthe effect 
useEffect(() => {
  localStorage.setItem('selectedAddress', JSON.stringify(selectedAddress));
}, [selectedAddress]);


// Save cart whenever it changes
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

 useEffect(() => {
  const isDark = localStorage.getItem('darkMode') === 'true';
  setDarkMode(isDark);
}, [setDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };


  // update function to cart add item from the menu componment
 const updateQuantity = (id, change) => {
  setCart(prevCart =>
    prevCart
      .map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;

          if (newQuantity <= 0) return null;

          return { ...item, quantity: newQuantity };
        }
        return item;
      })
      .filter(Boolean)
  );
};

// delivery charage 

const deliveryCharge = cart.length > 0 ? 100 : 0;


//  caluclation item of that componment
const calculateTotal = () => {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
};

const calculateGrandTotal = () => {
  return (calculateTotal() + deliveryCharge).toFixed(2);
};



// clear cart button
const handleClearCart = () => {
  if (window.confirm("Are you sure you want to remove all items?")) {
    setCart([]);
  }
};

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (editingAddress) {
      setAddresses(addresses.map(addr =>
        addr.id === editingAddress.id
          ? { ...addr, ...formData, label: formData.type === 'home' ? 'Home' : 'Office' }
          : addr
      ));
      setEditingAddress(null);
    } else {
      const newAddress = {
        id: Date.now(),
        ...formData,
        label: formData.type === 'home' ? 'Home' : 'Office'
      };
      setAddresses([...addresses, newAddress]);
      setSelectedAddress(newAddress.id);
    }
    setFormData({ type: 'home', street: '', city: '', zipCode: '' });
    setShowAddressForm(false);
  };

  const startEditAddress = (address) => {
    setEditingAddress(address);
    setFormData({
      type: address.type,
      street: address.street,
      city: address.city,
      zipCode: address.zipCode
    });
    setShowAddressForm(true);
  };

  const deleteAddress = (id) => {
  const updatedAddresses = addresses.filter(addr => addr.id !== id);
  setAddresses(updatedAddresses);

  if (selectedAddress === id) {
    setSelectedAddress(updatedAddresses[0]?.id || null);
  }
};

  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          alert(`Location captured! Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`);
        },
        (error) => {
          alert('Unable to retrieve location. Please enable location services.');
          console.error('Location error:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

const handleOrderNow = () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        const selectedAddr = addresses.find(
          addr => addr.id === selectedAddress
        );

        console.log('Order Details:', {
          items: cart,
          address: selectedAddr,
          location: locationData,
          total: calculateGrandTotal()
        });

        alert("Order placed successfully!");
      },
      (error) => {
        alert('Unable to retrieve location.');
        console.error(error);
      }
    );
  } else {
    alert('Geolocation not supported.');
  }
};

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto p-4 md:p-6">
 
<div className="flex justify-between items-center mb-6">
  
  {/* Left Side - Title */}
  <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
    Your Cart
  </h1>

  {/* Right Side - Dark Mode Toggle */}
  <button
    onClick={toggleDarkMode}
    className={`p-3 rounded-full transition-colors ${
      darkMode
        ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>

</div>




        <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>

          
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Items
          </h2>
          

          {cart.length === 0 ? (
            <p className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Your cart is empty
            </p>
        
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div
                  key={item.id}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.name}
                    </h3>
                    <p className={`text-lg font-bold ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                      ₹{item.price}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode
                          ? 'bg-gray-600 text-white hover:bg-gray-500'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <Minus size={16} />
                    </button>
                    <span className={`w-8 text-center font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode
                          ? 'bg-amber-600 text-white hover:bg-amber-500'
                          : 'bg-amber-500 text-white hover:bg-amber-600'
                      }`}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {cart.length > 0 && (
                
 <button
  onClick={handleClearCart}
  className={`my-4 ml-auto block px-4 py-2.5 rounded-lg font-semibold transition-colors ${
    darkMode
      ? 'bg-red-600 text-white hover:bg-red-500'
      : 'bg-red-500 text-white hover:bg-red-600'
  }`}
>
  Remove All Items
</button>
)}




</div>

)}
</div>








{/* show delivery  */}
        <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
            
            <div className="space-y-3 mb-6">
  {cart.map(item => (
    <div key={item.id} className="flex items-center gap-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded object-cover"
      />
      <div className="flex-1">
        <p className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {item.name} × {item.quantity}
        </p>
      </div>
      <p className="font-semibold">
        ₹{(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  ))}

  {/* Subtotal */}
  <div className="flex justify-between pt-4 border-t">
    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
      Subtotal
    </span>
   <span>₹{calculateTotal().toFixed(2)}</span> 
  </div>

  {/* Delivery */}
  <div className="flex justify-between">
    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
      Delivery Charge
    </span>
    <span>₹{deliveryCharge}</span>
  </div>

  {/* Grand Total */}
  <div className="flex justify-between text-lg font-bold pt-2 border-t">
    <span className={darkMode ? 'text-white' : 'text-gray-900'}>
      Grand Total
    </span>
    <span className={darkMode ? 'text-amber-400' : 'text-amber-600'}>
      ₹{calculateGrandTotal()}
    </span>
  </div>
</div>



          <button
            onClick={handleOrderNow}
            disabled={cart.length === 0}
            className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              cart.length === 0
                ? darkMode
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : darkMode
                  ? 'bg-amber-600 text-white hover:bg-amber-500 hover:shadow-lg'
                  : 'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg'
            }`}
          >
            <MapPin size={24} />
            Order Now with Current Location
          </button>
        </div>

                <div className={`rounded-xl p-6 mt-4 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Delivery Address
            </h2>
            <button
              onClick={() => {
                setShowAddressForm(!showAddressForm);
                setEditingAddress(null);
                setFormData({ type: 'home', street: '', city: '', zipCode: '' });
              }}
              className={`px-4 py-2 rounded-lg transition-colors ${
                darkMode
                  ? 'bg-amber-600 text-white hover:bg-amber-500'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
            >
              {showAddressForm ? 'Cancel' : '+ Add Address'}
            </button>
          </div>

          {showAddressForm && (
            <form onSubmit={handleAddressSubmit} className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="mb-4">
                <label className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Address Type
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'home' })}
                    className={`flex-1 p-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                      formData.type === 'home'
                        ? darkMode
                          ? 'bg-amber-600 text-white'
                          : 'bg-amber-500 text-white'
                        : darkMode
                          ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Home size={20} />
                    Home
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'office' })}
                    className={`flex-1 p-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                      formData.type === 'office'
                        ? darkMode
                          ? 'bg-amber-600 text-white'
                          : 'bg-amber-500 text-white'
                        : darkMode
                          ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Briefcase size={20} />
                    Office
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Street Address"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  required
                  className={`w-full p-3 rounded-lg transition-colors ${
                    darkMode
                      ? 'bg-gray-600 text-white placeholder-gray-400 border-gray-500'
                      : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300'
                  } border`}
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className={`p-3 rounded-lg transition-colors ${
                      darkMode
                        ? 'bg-gray-600 text-white placeholder-gray-400 border-gray-500'
                        : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300'
                    } border`}
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    required
                    className={`p-3 rounded-lg transition-colors ${
                      darkMode
                        ? 'bg-gray-600 text-white placeholder-gray-400 border-gray-500'
                        : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300'
                    } border`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full mt-4 py-3 rounded-lg font-semibold transition-colors ${
                  darkMode
                    ? 'bg-amber-600 text-white hover:bg-amber-500'
                    : 'bg-amber-500 text-white hover:bg-amber-600'
                }`}
              >
                {editingAddress ? 'Update Address' : 'Save Address'}
              </button>
            </form>
          )}

          <div className="space-y-3">
            {addresses.map(address => (
              <div
                key={address.id}
                onClick={() => setSelectedAddress(address.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedAddress === address.id
                    ? darkMode
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-500 text-white'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    {address.type === 'home' ? <Home size={20} /> : <Briefcase size={20} />}
                    <div>
                      <p className="font-semibold">{address.label}</p>
                      <p className={`text-sm ${
                        selectedAddress === address.id
                          ? 'opacity-90'
                          : darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {address.street}, {address.city}, {address.zipCode}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        startEditAddress(address);
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        selectedAddress === address.id
                          ? 'bg-white/20 hover:bg-white/30'
                          : darkMode
                            ? 'bg-gray-600 hover:bg-gray-500'
                            : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (window.confirm('Delete this address?')) deleteAddress(address.id);
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        selectedAddress === address.id
                          ? 'bg-white/20 hover:bg-white/30'
                          : darkMode
                            ? 'bg-gray-600 hover:bg-gray-500'
                            : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>      
    </div>
  );
}


