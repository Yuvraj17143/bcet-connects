// src/services/apiClient.js
import axios from "axios";

/**
 * Safely read token from localStorage
 */
export const getToken = () => {
  try {
    return localStorage.getItem("token") || "";
  } catch {
    return "";
  }
};

/**
 * IMPORTANT RULE:
 * VITE_API_BASE_URL = backend DOMAIN only
 * Example:
 *   https://bcet-connects.onrender.com
 *   http://localhost:5000
 */
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

/**
 * Axios instance
 * `/api` is appended HERE and ONLY HERE
 */
const api = axios.create({
  baseURL: BASE_URL.replace(/\/$/, "") + "/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ---------------- REQUEST INTERCEPTOR ---------------- */
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* ---------------- RESPONSE INTERCEPTOR ---------------- */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      try {
        if (typeof api._onUnauthenticated === "function") {
          api._onUnauthenticated();
        }
      } catch {}
    }

    return Promise.reject(error);
  }
);

export default api;
