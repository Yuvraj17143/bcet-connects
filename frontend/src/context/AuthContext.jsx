// frontend/src/context/AuthContext.jsx
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

  /* ---------------- axios 401 global hook ---------------- */
  useEffect(() => {
    api._onUnauthenticated = () => {
      hardLogout();
    };
    return () => {
      api._onUnauthenticated = undefined;
    };
  }, []);

  /* ---------------- validate token on refresh ---------------- */
  useEffect(() => {
    let active = true;

    const validate = async () => {
      if (!token) {
        setLoading(false);
        setAuthReady(true);
        return;
      }

      try {
        setLoading(true);

        // 🔥 NEVER hardcode /api here
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

    validate();
    return () => {
      active = false;
    };
  }, [token]);

  /* ---------------- internal logout ---------------- */
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

  /* ---------------- login ---------------- */
  const login = useCallback(async (email, password) => {
    // 🔥 ONLY relative path
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

  /* ---------------- logout (frontend only) ---------------- */
  const logout = useCallback(() => {
    // ❌ backend logout route exist nahi karta → don't call it
    hardLogout();
  }, [hardLogout]);

  /* ---------------- user helpers ---------------- */
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

  /* ---------------- helpers ---------------- */
  const fetchUnreadCount = useCallback(async () => {
    try {
      const res = await api.get("/notifications/unread-count");
      return res?.data?.data?.unreadCount ?? 0;
    } catch {
      return 0;
    }
  }, []);

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
