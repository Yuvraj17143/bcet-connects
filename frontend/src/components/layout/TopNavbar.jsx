import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";

const TopNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-4 lg:px-6">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search people, jobs, events..."
          className="w-full max-w-md px-3 py-1.5 text-sm border border-slate-200 rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center gap-4">
        {/* TODO: Notifications & AI assistant icons */}
        <span className="text-sm text-slate-600">{user?.name || "User"}</span>
        <button
          onClick={logout}
          className="text-xs px-3 py-1 rounded-full border border-slate-300 hover:bg-slate-100"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
