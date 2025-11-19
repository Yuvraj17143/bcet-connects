// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "@services/authService.js";

const AuthContext = createContext(null);

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { id, name, role, token }
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // On mount, check if user is already logged in
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setLoading(false);
        return;
      }
      const data = await authService.getCurrentUser(token);
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Auth check failed:", err);
      localStorage.removeItem("authToken");
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    setLoading(true);
    try {
      const { user: userData, token } = await authService.loginRequest(credentials);
      localStorage.setItem("authToken", token);
      setUser(userData);
      setIsAuthenticated(true);

      // Redirect based on role
      navigate(getRedirectPath(userData.role));
      return { success: true };
    } catch (err) {
      console.error("Login error:", err);
      return { success: false, error: err.response?.data?.message || "Login failed" };
    } finally {
      setLoading(false);
    }
  };

  const register = async (registrationData) => {
    setLoading(true);
    try {
      const { user: userData, token } = await authService.register(registrationData);
      localStorage.setItem("authToken", token);
      setUser(userData);
      setIsAuthenticated(true);

      navigate("/feed");
      return { success: true };
    } catch (err) {
      console.error("Registration error:", err);
      return { success: false, error: err.response?.data?.message || "Registration failed" };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logoutRequest();
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      localStorage.removeItem("authToken");
      setUser(null);
      setIsAuthenticated(false);
      navigate("/login");
    }
  };

  const updateUser = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
  };

  const getRedirectPath = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return "/admin";
      case "faculty":
      case "alumni":
      case "student":
      default:
        return "/feed";
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    updateUser,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
