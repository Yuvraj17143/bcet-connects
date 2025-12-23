// frontend/src/services/authService.js
import apiClient from "./apiClient.js";

/**
 * Login user
 * @param {Object} payload { email, password }
 */
export const loginRequest = async ({ email, password }) => {
  try {
    const res = await apiClient.post("/api/auth/login", {
      email,
      password,
    });
    return res.data; // { success, data: { user, token } }
  } catch (err) {
    console.error(
      "Login error:",
      err.response?.data?.message || err.message
    );
    throw err;
  }
};

/**
 * Logout user
 * (Frontend-only logout for now)
 */
export const logoutRequest = async () => {
  try {
    // If later you add backend logout:
    // await apiClient.post("/api/auth/logout");
    return true;
  } catch (err) {
    console.error("Logout error:", err.message);
    return false;
  }
};

/**
 * Get current logged-in user
 * Token is automatically attached by apiClient interceptor
 */
export const getCurrentUser = async () => {
  try {
    const res = await apiClient.get("/api/auth/me");
    return res.data; // { success, data: { user } }
  } catch (err) {
    console.error(
      "Get current user error:",
      err.response?.data?.message || err.message
    );
    throw err;
  }
};

const authService = {
  loginRequest,
  logoutRequest,
  getCurrentUser,
};

export default authService;
