import { useState } from "react";
import { motion } from "framer-motion";

export default function Signup({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert(`Welcome to our Coffee Shop, ${formData.name}! ☕`);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center pb-10 transition-colors duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-[#0f172a] via-[#020617] to-black"
          : "bg-gradient-to-br from-amber-100 via-orange-200 to-pink-200"
      }`}
    >
      {/* GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full max-w-md p-8 rounded-3xl backdrop-blur-xl border shadow-2xl hover:scale-[1.01] transition-transform duration-300 ${
          darkMode
            ? "bg-white/10 border-white/15"
            : "bg-white/40 border-white/40"
        }`}
      >
        {/* TITLE */}
        <h1
          className={`text-3xl font-extrabold text-center mb-1 ${
            darkMode ? "text-amber-300" : "text-amber-800"
          }`}
        >
          ☕ Coffee Shop
        </h1>

        <p
          className={`text-center mb-8 text-sm ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Create your account & enjoy premium coffee
        </p>

        {/* FORM */}
        <div className="space-y-5">
          {/* NAME */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 border ${
                darkMode
                  ? "bg-white/10 border-white/20 text-white placeholder-gray-400 hover:bg-white/15 hover:border-amber-400/40 focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  : "bg-white/80 border-gray-300 placeholder-gray-700 hover:border-amber-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              }`}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400 mt-1"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 border ${
                darkMode
                  ? "bg-white/10 border-white/20 text-white placeholder-gray-400 hover:bg-white/15 hover:border-amber-400/40 focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  : "bg-white/80 border-gray-300 placeholder-gray-700 hover:border-amber-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              }`}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400 mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 border ${
                darkMode
                  ? "bg-white/10 border-white/20 text-white placeholder-gray-400 hover:bg-white/15 hover:border-amber-400/40 focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  : "bg-white/80 border-gray-300 placeholder-gray-700 hover:border-amber-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              }`}
            />
            {errors.password && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400 mt-1"
              >
                {errors.password}
              </motion.p>
            )}
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg shadow-amber-500/20 transition-all duration-300"
          >
            Create Account
          </motion.button>
        </div>

        {/* FOOTER */}
        <p
          className={`text-center text-sm mt-6 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Already have an account?{" "}
          <span className="text-amber-500 hover:underline cursor-pointer">
            Log in
          </span>
        </p>
      </motion.div>
    </div>
  );
}
