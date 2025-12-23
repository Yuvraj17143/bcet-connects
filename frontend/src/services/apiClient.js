import axios from "axios";

export const getToken = () => {
  try {
    return localStorage.getItem("token") || "";
  } catch {
    return "";
  }
};

// 🔐 SINGLE SOURCE OF TRUTH
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!BASE_URL) {
  console.error("❌ VITE_API_BASE_URL is missing in Vercel env");
}

const api = axios.create({
  baseURL: `${BASE_URL.replace(/\/$/, "")}/api`, // 👈 ONLY HERE
  timeout: 15000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth expiry
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && api._onUnauthenticated) {
      api._onUnauthenticated();
    }
    return Promise.reject(err);
  }
);

export default api;
