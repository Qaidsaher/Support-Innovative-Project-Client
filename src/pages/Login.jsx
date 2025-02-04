// src/pages/Login.jsx
// import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
// import InputField from "../components/InputField";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-backend.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        // Save auth token, etc.
        navigate("/dashboard");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred");
    }
  };

  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
  //       <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
  //         <h2 className="text-2xl mb-4 text-center text-gray-800 dark:text-gray-100">Login</h2>
  //         <input
  //           type="email"
  //           placeholder="Email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           className="w-full p-2 mb-4 border rounded focus:outline-none"
  //         />
  //         <input
  //           type="password"
  //           placeholder="Password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           className="w-full p-2 mb-4 border rounded focus:outline-none"
  //         />
  //         <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition">
  //           Login
  //         </button>
  //       </form>
  //     </div>
  //   );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    education: "",
    birthdate: "",
    city: "",
    isInvestor: false,
    isInnovator: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission
  //     console.log(formData);
  //   };

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen flex items-center justify-end flex-col w-full">
      <h2 className="text-2xl font-bold mb-4 text-right">Sign Up</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center  w-full">
          <InputField
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <InputField
            label="Education"
            name="education"
            placeholder="Enter your education"
            value={formData.education}
            onChange={handleChange}
          />
          <InputField
            label="Birthdate"
            name="birthdate"
            type="date"
            value={formData.birthdate}
            onChange={handleChange}
          />
          <InputField
            label="City"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
          />
          <label className="mr-4 ">
            <input
              type="checkbox"
              name="isInvestor"
              checked={formData.isInvestor}
              onChange={handleChange}
              className="mr-1 "
            />
            Investor
          </label>
          <label>
            <input
              type="checkbox"
              name="isInnovator"
              checked={formData.isInnovator}
              onChange={handleChange}
              className="mr-1"
            />
            Innovator
          </label>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center my-6">
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to the{" "}
            <a href="#" className="text-indigo-600">
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full transition duration-300 transform hover:bg-indigo-700 hover:scale-105 w-60"
            disabled={!formData.termsAccepted}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
