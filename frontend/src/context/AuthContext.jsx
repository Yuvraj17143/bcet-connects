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

  /* -------------------- axios 401 hook -------------------- */
  useEffect(() => {
    api._onUnauthenticated = () => {
      handleLogoutLocal();
    };
    return () => {
      api._onUnauthenticated = undefined;
    };
  }, []);

  /* -------------------- auto validate token -------------------- */
  useEffect(() => {
    let mounted = true;

    const initAuth = async () => {
      if (!token) {
        setLoading(false);
        setAuthReady(true);
        return;
      }

      try {
        setLoading(true);
        const res = await api.get("/auth/me");
        const me = res?.data?.data ?? null;

        if (!mounted) return;

        if (me) {
          setAuthUser(me);
        } else {
          handleLogoutLocal();
        }
      } catch {
        handleLogoutLocal();
      } finally {
        if (mounted) {
          setLoading(false);
          setAuthReady(true);
        }
      }
    };

    initAuth();
    return () => {
      mounted = false;
    };
  }, [token]);

  /* -------------------- INTERNAL LOGOUT -------------------- */
  const handleLogoutLocal = useCallback(() => {
    setToken("");
    setUser(null);
    setRole("");
    setAuthReady(true);

    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("role");
    } catch {}
  }, []);

  /* -------------------- PUBLIC: login -------------------- */
  const login = useCallback(async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    const payload = res?.data?.data ?? {};

    const authToken = payload.token;
    const authUser = payload.user;

    if (!authToken || !authUser) {
      throw new Error("Invalid login response");
    }

    setToken(authToken);
    localStorage.setItem("token", authToken);
    setAuthUser(authUser);

    return authUser;
  }, []);

  /* -------------------- PUBLIC: logout -------------------- */
  const logout = useCallback(async () => {
    try {
      api.post("/auth/logout").catch(() => {});
    } catch {}
    handleLogoutLocal();
  }, [handleLogoutLocal]);

  /* -------------------- USER HELPERS -------------------- */

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

  /* -------------------- helpers -------------------- */
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
