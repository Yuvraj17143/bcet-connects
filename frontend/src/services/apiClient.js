// src/services/apiClient.js
import axios from "axios";

/**
 * Read auth token safely from localStorage.
 * Keeps apiClient independent from React contexts.
 */
export const getToken = () => {
  try {
    return localStorage.getItem("token") || "";
  } catch {
    return "";
  }
};

/**
 * Create Axios instance
 * NOTE:
 * - baseURL should be ONLY backend origin
 * - Do NOT include `/api` here
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request Interceptor
 * - Attaches JWT token (if present)
 */
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

/**
 * Response Interceptor
 * - Centralized 401 handling
 * - Allows app-level logout via api._onUnauthenticated
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      if (typeof api._onUnauthenticated === "function") {
        try {
          api._onUnauthenticated();
        } catch {
          // ignore logout errors
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
