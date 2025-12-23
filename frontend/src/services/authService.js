// frontend/src/services/authService.js
import api from "./apiClient";

/**
 * 🔥 Smart request helper
 * Tries multiple route formats safely
 */
const smartRequest = async (method, path, payload) => {
  const pathsToTry = [
    path,               // /auth/login
    `/api${path}`,      // /api/auth/login (fallback)
  ];

  let lastError = null;

  for (const p of pathsToTry) {
    try {
      const res = await api.request({
        method,
        url: p,
        data: payload,
      });
      return res.data;
    } catch (err) {
      // only retry on 404
      if (err?.response?.status === 404) {
        lastError = err;
        continue;
      }
      throw err; // other errors are real (401, 500)
    }
  }

  throw lastError;
};

/* ---------------- LOGIN ---------------- */
export const loginRequest = async ({ email, password }) => {
  return smartRequest("post", "/auth/login", { email, password });
};

/* ---------------- LOGOUT ---------------- */
export const logoutRequest = async () => {
  // frontend-only logout (backend route optional)
  return true;
};

/* ---------------- CURRENT USER ---------------- */
export const getCurrentUser = async () => {
  return smartRequest("get", "/auth/me");
};

const authService = {
  loginRequest,
  logoutRequest,
  getCurrentUser,
};

export default authService;
