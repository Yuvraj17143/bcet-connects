// frontend/src/services/apiClient.js
import axios from "axios";

/**
 * Safely read auth token from localStorage
 */
export const getToken = () => {
  try {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("token") || "";
  } catch {
    return "";
  }
};

/**
 * IMPORTANT:
 * Backend is mounted at /api
 * So baseURL MUST end with /api
 *
 * Example:
 * VITE_API_BASE_URL = https://bcet-connects.onrender.com
 * Final requests → https://bcet-connects.onrender.com/api/...
 */
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: `${API_BASE_URL.replace(/\/$/, "")}/api`, // 🔥 auto-fix trailing slash
  timeout: 15000,
  withCredentials: true, // required for CORS + auth
  headers: {
    "Content-Type": "application/json",
  },
});

/* ---------------- Request Interceptor ---------------- */
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

/* ---------------- Response Interceptor ---------------- */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Network / server unreachable
    if (!error.response) {
      console.error("❌ Network error:", error.message);
      return Promise.reject({
        message: "Network error. Please check your connection.",
        originalError: error,
      });
    }

    const status = error.response.status;

    // Centralized unauth handler (logout on 401)
    if (status === 401) {
      try {
        if (typeof api._onUnauthenticated === "function") {
          api._onUnauthenticated();
        }
      } catch {
        // ignore
      }
    }

    return Promise.reject(error);
  }
);

export default api;
