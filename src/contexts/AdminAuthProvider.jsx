import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import * as jwtDecode from "jwt-decode";

// Create the AdminAuthContext
export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // On mount, check for an existing admin session (JWT stored in localStorage)
  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (storedToken) {
      setToken(storedToken);
      try {
        // Decode the token to get admin data; adjust the property names as needed.
        const decoded = jwtDecode(storedToken);
        setAdmin({ id: decoded.id, ...decoded }); // You can customize the admin object structure
      } catch (err) {
        console.error("Token decoding error", err);
        // If token decoding fails, clear stored token.
        localStorage.removeItem("adminToken");
      }
    }
    setLoading(false);
  }, []);

  // Login function that calls your Node.js API
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Adjust the URL to your Node.js endpoint.
      const response = await axios.post("https://api.example.com/api/admin/login", {
        email,
        password,
      });
      // Expecting response.data to be { message, token }
      const { message, token: jwtToken } = response.data;
      localStorage.setItem("adminToken", jwtToken);
      setToken(jwtToken);
      try {
        const decoded = jwtDecode(jwtToken);
        setAdmin({ id: decoded.id, ...decoded });
      } catch (err) {
        console.error("Error decoding token", err);
        setAdmin(null);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials or server error");
    } finally {
      setLoading(false);
    }
  };

  // Register function that calls your Node.js API
  const register = async (registrationData) => {
    setLoading(true);
    setError(null);
    try {
      // Adjust the URL to your Node.js registration endpoint.
      const response = await axios.post("https://api.example.com/api/admin/register", registrationData);
      // Expecting response.data to be { message, token }
      const { message, token: jwtToken } = response.data;
      localStorage.setItem("adminToken", jwtToken);
      setToken(jwtToken);
      try {
        const decoded = jwtDecode(jwtToken);
        setAdmin({ id: decoded.id, ...decoded });
      } catch (err) {
        console.error("Error decoding token", err);
        setAdmin(null);
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Registration failed, please try again");
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("adminToken");
    setAdmin(null);
    setToken(null);
  };

  return (
    <AdminAuthContext.Provider value={{ admin, token, loading, error, login, register, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
