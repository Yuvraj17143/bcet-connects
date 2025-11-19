// src/services/authService.js
import apiClient from "./apiClient.js";

// Login
export const loginRequest = async ({ email, password }) => {
  try {
    const res = await apiClient.post("/auth/login", { email, password });
    return res.data; // { user: {}, token: "" }
  } catch (err) {
    console.error("Login error:", err.response?.data || err);
    throw err;
  }
};

// Logout
export const logoutRequest = async () => {
  try {
    // Optional backend logout call
    return true;
  } catch (err) {
    console.error("Logout error:", err);
    return false;
  }
};

// Get current user
export const getCurrentUser = async (token) => {
  try {
    const res = await apiClient.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data; // { user: {} }
  } catch (err) {
    console.error("Get current user error:", err.response?.data || err);
    throw err;
  }
};

// Default export for easier import
const authService = { loginRequest, logoutRequest, getCurrentUser };
export default authService;
