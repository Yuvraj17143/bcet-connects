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
 * Base backend domain ONLY (no /api)
 * Example: https://bcet-connects.onrender.com
 */
const BASE_DOMAIN =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

/**
 * Normalize any API path to backend format
 *
 * Examples:
 *  /auth/login        -> /api/auth/login
 *  auth/login         -> /api/auth/login
 *  /api/auth/login   -> /api/auth/login
 *  api/auth/login    -> /api/auth/login
 *  /users/me         -> /api/users/me
 */
const normalizeApiPath = (url = "") => {
  let path = url.trim();

  // remove protocol/full url if accidentally passed
  path = path.replace(/^https?:\/\/[^/]+/i, "");

  // remove leading slashes
  path = path.replace(/^\/+/, "");

  // remove existing api prefix
  if (path.startsWith("api/")) {
    path = path.replace(/^api\//, "");
  }

  return `/api/${path}`;
};

const api = axios.create({
  baseURL: BASE_DOMAIN.replace(/\/$/, ""),
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ---------------- REQUEST INTERCEPTOR ---------------- */
api.interceptors.request.use(
  (config) => {
    // 🔥 FORCE PATH NORMALIZATION
    config.url = normalizeApiPath(config.url || "");

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

    if (status === 401 && typeof api._onUnauthenticated === "function") {
      try {
        api._onUnauthenticated();
      } catch {}
    }

    return Promise.reject(error);
  }
);

export default api;
