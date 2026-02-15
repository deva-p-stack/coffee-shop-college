import { useState } from 'react';
import { User, Mail, Phone, MapPin, Bell, Lock, Moon, Sun, Coffee } from 'lucide-react';

export default function ProfileSettings() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Coffee Street, Bean City, CA 90210',
    favoriteOrder: 'Caramel Macchiato',
    emailNotifications: true,
    smsNotifications: false,
    orderUpdates: true,
    promotions: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
  };

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-amber-50';
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const labelClass = darkMode ? 'text-gray-300' : 'text-gray-700';
  const inputClass = darkMode 
    ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-amber-500' 
    : 'bg-white border-gray-300 text-gray-900 focus:border-amber-600';
  // const sectionClass = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300 p-4 md:p-8`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mb-6`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`${darkMode ? 'bg-amber-600' : 'bg-amber-500'} p-3 rounded-full`}>
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold ${textClass}`}>Profile Settings</h1>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  Manage your coffee preferences and account details
                </p>
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

        {/* Personal Information */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-6">
            <User className={`w-6 h-6 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`} />
            <h2 className={`text-2xl font-semibold ${textClass}`}>Personal Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium ${labelClass} mb-2`}>
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${labelClass} mb-2`}>
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-6">
            <Mail className={`w-6 h-6 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`} />
            <h2 className={`text-2xl font-semibold ${textClass}`}>Contact Information</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className={`block text-sm font-medium ${labelClass} mb-2`}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${labelClass} mb-2`}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${labelClass} mb-2`}>
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
              />
            </div>
          </div>
        </div>

        {/* Coffee Preferences */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-6">
            <Coffee className={`w-6 h-6 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`} />
            <h2 className={`text-2xl font-semibold ${textClass}`}>Coffee Preferences</h2>
          </div>
          
          <div>
            <label className={`block text-sm font-medium ${labelClass} mb-2`}>
              Favorite Order
            </label>
            <input
              type="text"
              name="favoriteOrder"
              value={formData.favoriteOrder}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg ${inputClass} focus:outline-none focus:ring-2 focus:ring-amber-500`}
            />
          </div>
        </div>

        {/* Notification Preferences */}
        <div className={`${cardClass} rounded-lg shadow-lg p-6 mb-6`}>
          <div className="flex items-center gap-3 mb-6">
            <Bell className={`w-6 h-6 ${darkMode ? 'text-amber-500' : 'text-amber-600'}`} />
            <h2 className={`text-2xl font-semibold ${textClass}`}>Notification Preferences</h2>
          </div>
          
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleInputChange}
                className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
              />
              <span className={labelClass}>Email Notifications</span>
            </label>
            
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="smsNotifications"
                checked={formData.smsNotifications}
                onChange={handleInputChange}
                className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
              />
              <span className={labelClass}>SMS Notifications</span>
            </label>
            
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="orderUpdates"
                checked={formData.orderUpdates}
                onChange={handleInputChange}
                className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
              />
              <span className={labelClass}>Order Updates</span>
            </label>
            
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="promotions"
                checked={formData.promotions}
                onChange={handleInputChange}
                className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
              />
              <span className={labelClass}>Promotions & Special Offers</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className={`flex-1 ${darkMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-500 hover:bg-amber-600'} text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg`}
          >
            Save Changes
          </button>
          <button
            className={`flex-1 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} ${textClass} font-semibold py-3 px-6 rounded-lg transition-colors`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}


