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
 * Vercel MUST provide this at build time
 */
const RAW_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 🔥 HARD FAIL (so bug kabhi silent na rahe)
if (!RAW_BASE_URL) {
  console.error(
    "❌ VITE_API_BASE_URL is missing. Set it in Vercel Environment Variables."
  );
}

const api = axios.create({
  // ALWAYS force /api
  baseURL: `${(RAW_BASE_URL || "http://localhost:5000").replace(/\/$/, "")}/api`,
  timeout: 15000,
  withCredentials: true,
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
    if (!error.response) {
      console.error("❌ Network error:", error.message);
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
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
