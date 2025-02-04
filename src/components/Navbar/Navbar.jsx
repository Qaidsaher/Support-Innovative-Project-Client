// src/components/Navbar/Navbar.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle language between 'en' and 'ar'
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  // Navigation items
  const navItems = [
    { label: t("Home"), path: "/" },
    { label: t("innovate"), path: "/innovate" },
    { label: t("About Us"), path: "/about" },
    { label: t("Login"), path: "/login" },
    { label: t("Join"), path: "/register" },
  ];

  return (
    <nav className="shadow fixed w-full z-10 bg-[#898787]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-4xl font-semibold text-indigo-600 transition transform hover:scale-105"
          >
            REAN
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="text-gray-700 dark:text-gray-300 transition transform hover:text-indigo-600 hover:scale-105 text-lg"
            >
              {item.label}
            </Link>
          ))}
          <Link
            // to={t("join-by")}
            to="/join-by"
            className="block rounded-sm text-gray-700 dark:text-gray-300 transition transform hover:text-indigo-600 hover:bg-indigo-400 p-2 text-md "
          >
            join by
          </Link>
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="text-gray-700 dark:text-gray-300 transition transform hover:text-indigo-600 hover:scale-105"
          >
            {i18n.language === "en" ? "EN" : "ع"}
          </button>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 transition transform hover:text-indigo-600 hover:scale-105"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300 transition transform hover:scale-110 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-6">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="block rounded-sm text-gray-700 dark:text-gray-300 transition transform hover:text-indigo-600 hover:bg-indigo-400 p-2 text-md "
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="block text-gray-700 dark:text-gray-300 transition transform hover:text-indigo-600 hover:scale-105"
            >
              {i18n.language === "en" ? "EN" : "ع"}
            </button>
            <button
              onClick={toggleTheme}
              className="block text-gray-700 dark:text-gray-300 transition transform hover:text-indigo-600 hover:scale-105"
            >
              {theme === "light" ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
