// src/services/authService.js
import api from "./apiClient";

/**
 * Login user
 * @param {Object} payload { email, password }
 * @returns { success, data: { user, token } }
 */
export const loginRequest = async ({ email, password }) => {
  const res = await api.post("/auth/login", {
    email,
    password,
  });
  return res.data;
};

/**
 * Get current logged-in user
 * Token is automatically attached by apiClient interceptor
 */
export const getCurrentUser = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

/**
 * Logout user (frontend-only)
 * Backend logout route is optional / not implemented
 */
export const logoutRequest = async () => {
  return true;
};

const authService = {
  loginRequest,
  getCurrentUser,
  logoutRequest,
};

export default authService;
