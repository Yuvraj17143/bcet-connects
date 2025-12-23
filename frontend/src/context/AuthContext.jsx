// src/context/AuthContext.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import api from "@/services/apiClient";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  /* ---------------- STATE ---------------- */
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem("token") || "";
    } catch {
      return "";
    }
  });

  const [role, setRole] = useState(() => {
    try {
      return localStorage.getItem("role") || "";
    } catch {
      return "";
    }
  });

  const [loading, setLoading] = useState(Boolean(token));
  const [authReady, setAuthReady] = useState(false);

  /* ---------------- GLOBAL 401 HANDLER ---------------- */
  useEffect(() => {
    api._onUnauthenticated = () => {
      hardLogout();
    };
    return () => {
      api._onUnauthenticated = undefined;
    };
  }, []);

  /* ---------------- TOKEN VALIDATION ON REFRESH ---------------- */
  useEffect(() => {
    let active = true;

    const validateToken = async () => {
      if (!token) {
        setLoading(false);
        setAuthReady(true);
        return;
      }

      try {
        setLoading(true);
        const res = await api.get("/auth/me");
        const me = res?.data?.data ?? null;

        if (!active) return;

        if (me) {
          setAuthUser(me);
        } else {
          hardLogout();
        }
      } catch {
        hardLogout();
      } finally {
        if (active) {
          setLoading(false);
          setAuthReady(true);
        }
      }
    };

    validateToken();
    return () => {
      active = false;
    };
  }, [token]);

  /* ---------------- INTERNAL LOGOUT ---------------- */
  const hardLogout = useCallback(() => {
    setUser(null);
    setToken("");
    setRole("");
    setAuthReady(true);

    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("role");
    } catch {}
  }, []);

  /* ---------------- LOGIN ---------------- */
  const login = useCallback(async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    const payload = res?.data?.data;

    if (!payload?.token || !payload?.user) {
      throw new Error("Invalid login response");
    }

    setToken(payload.token);
    localStorage.setItem("token", payload.token);
    setAuthUser(payload.user);

    return payload.user;
  }, []);

  /* ---------------- LOGOUT (FRONTEND ONLY) ---------------- */
  const logout = useCallback(() => {
    hardLogout();
  }, [hardLogout]);

  /* ---------------- USER HELPERS ---------------- */
  const setAuthUser = useCallback((nextUser) => {
    setUser(nextUser);
    setRole(nextUser?.role || "");

    try {
      localStorage.setItem("user", JSON.stringify(nextUser));
      localStorage.setItem("role", nextUser?.role || "");
    } catch {}
  }, []);

  const patchUser = useCallback((patch) => {
    setUser((prev) => {
      const next = { ...(prev || {}), ...patch };
      try {
        localStorage.setItem("user", JSON.stringify(next));
      } catch {}
      return next;
    });

    if (patch?.role) {
      setRole(patch.role);
      try {
        localStorage.setItem("role", patch.role);
      } catch {}
    }
  }, []);

  /* ---------------- HELPERS ---------------- */
  const fetchUnreadCount = useCallback(async () => {
    try {
      const res = await api.get("/notifications/unread-count");
      return res?.data?.data?.unreadCount ?? 0;
    } catch {
      return 0;
    }
  }, []);

  /* ---------------- CONTEXT VALUE ---------------- */
  const value = useMemo(
    () => ({
      user,
      token,
      role,
      loading,
      authReady,
      login,
      logout,
      setAuthUser,
      patchUser,
      fetchUnreadCount,
    }),
    [
      user,
      token,
      role,
      loading,
      authReady,
      login,
      logout,
      setAuthUser,
      patchUser,
      fetchUnreadCount,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
