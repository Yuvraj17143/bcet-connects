// frontend/src/services/apiClient.js
import axios from "axios";

/**
 * Read token safely
 */
export const getToken = () => {
  try {
    return localStorage.getItem("token") || "";
  } catch {
    return "";
  }
};

/**
 * Base backend domain (NO /api here)
 * Example: https://bcet-connects.onrender.com
 */
const RAW_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

/**
 * Normalize URL:
 * - Ensures exactly ONE /api
 * - Works for both "/auth/login" and "/api/auth/login"
 */
const normalizeUrl = (url) => {
  if (!url) return "/api";

  // remove starting slashes
  let clean = url.replace(/^\/+/, "");

  // remove duplicate api
  if (clean.startsWith("api/")) {
    clean = clean.replace(/^api\//, "");
  }

  return `/api/${clean}`;
};

const api = axios.create({
  baseURL: RAW_BASE_URL.replace(/\/$/, ""),
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ---------------- Request Interceptor ---------------- */
api.interceptors.request.use(
  (config) => {
    // 🔥 AUTO-FIX PATH
    config.url = normalizeUrl(config.url);

    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

/* ---------------- Response Interceptor ---------------- */
api.interceptors.response.use(
  (res) => res,
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
