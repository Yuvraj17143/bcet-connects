// src/services/authService.js
import apiClient from "./apiClient.js";

/**
 * Login user
 */
export const loginRequest = async ({ email, password }) => {
  try {
    const res = await apiClient.post("/api/auth/login", {
      email,
      password,
    });
    return res.data; // { user, token }
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    throw err;
  }
};

/**
 * Logout user (optional backend call)
 * If you later add /api/auth/logout, update this.
 */
export const logoutRequest = async () => {
  try {
    // await apiClient.post("/api/auth/logout");
    return true;
  } catch (err) {
    console.error("Logout error:", err.response?.data || err.message);
    return false;
  }
};

/**
 * Get currently logged-in user
 */
export const getCurrentUser = async () => {
  try {
    const res = await apiClient.get("/api/auth/me");
    return res.data; // { user }
  } catch (err) {
    console.error("Get current user error:", err.response?.data || err.message);
    throw err;
  }
};

// Default export
const authService = {
  loginRequest,
  logoutRequest,
  getCurrentUser,
};

export default authService;
