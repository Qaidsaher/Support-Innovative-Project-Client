import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import {
  getProfile,
  login,
  logout,
} from "@/services/authService"; // ✅ Import authentication services

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);

        // ✅ Use the getProfile service instead of axios directly
        getProfile()
          .then((res) => setUser(res))
          .catch(() => {
            localStorage.removeItem("token");
            setUser(null);
            setToken(null);
            setRole(null);
          });
      } catch (error) {
        console.error("Invalid token");
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
        setRole(null);
      }
    }
  }, [token]);

  const handleLogin = async (email, password) => {
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUser(data.user);
      setRole(data.user.role);
      window.location.href = "/dashboard"; // Redirect after login
    } catch (error) {
      console.error("Login failed", error.response?.data?.message);
    }
  };

  const handleLogout = () => {
    logout(); // ✅ Use the logout service
    setToken(null);
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, role, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
