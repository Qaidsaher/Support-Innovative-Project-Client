// import React from "react";
// import { Link } from "react-router-dom";
// import { FaSignOutAlt } from "react-icons/fa";
// import useAuth from "@/hooks/useAuth"; // ✅ Correct default import

// const Navbar = () => {
//   const { user, logout } = useAuth(); // ✅ Now this will work

//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">My Application</h1>
//       <nav>
//         <ul className="flex space-x-4">
//           {user ? (
//             <>
//               <li>
//                 <Link to="/dashboard" className="text-blue-500">
//                   Dashboard
//                 </Link>
//               </li>
//               <li>
//                 <button onClick={logout} className="flex items-center space-x-1 text-red-500">
//                   <FaSignOutAlt /> <span>Logout</span>
//                 </button>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <Link to="/login" className="text-blue-500">
//                   Login
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/register" className="text-green-500">
//                   Register
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// };
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "@/contexts/ThemeContext"; // ✅ Correct Import

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Use Context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle language between 'en' and 'ar'
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { label: t("Home"), path: "/" },
    { label: t("Innovate"), path: "/innovate" },
    { label: t("About Us"), path: "/about" },
    { label: t("Login"), path: "/login" },
    { label: t("Join"), path: "/register" },
  ];

  return (
    <nav className="fixed w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <Link to="/" className="text-4xl font-semibold text-indigo-500 transition transform hover:scale-105">
            REAN
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, idx) => (
            <Link key={idx} to={item.path} className="text-gray-300 transition transform hover:text-indigo-500 hover:scale-105 text-lg">
              {item.label}
            </Link>
          ))}
          <button onClick={toggleLanguage} className="text-gray-300 transition transform hover:text-indigo-500 hover:scale-105">
            {i18n.language === "en" ? "EN" : "ع"}
          </button>
          <button onClick={toggleTheme} className="text-gray-300 transition transform hover:text-indigo-500 hover:scale-105">
            {theme === "media" ? "🌞" : "🌙"}
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 transition transform hover:scale-110">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 p-6">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, idx) => (
              <Link key={idx} to={item.path} className="block rounded-md text-gray-300 px-3 py-2 transition transform hover:text-indigo-500 hover:bg-indigo-600">
                {item.label}
              </Link>
            ))}
            <button onClick={toggleLanguage} className="block text-gray-300 px-3 py-2 transition transform hover:text-indigo-500 hover:scale-105">
              {i18n.language === "en" ? "EN" : "ع"}
            </button>
            <button onClick={toggleTheme} className="block text-gray-300 px-3 py-2 transition transform hover:text-indigo-500 hover:scale-105">
              {theme === "media" ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
