import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { sidebarLinksByRole } from "../../utils/roleConfig.js";

const Sidebar = () => {
  const { user } = useAuth();
  if (!user) return null;

  const links = sidebarLinksByRole[user.role] || [];

  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-slate-200">
      <div className="p-4 border-b border-slate-200">
        <div className="font-bold text-lg">BCET Connect</div>
        <div className="text-xs text-slate-500">{user.role.toLowerCase()} portal</div>
      </div>
      <nav className="flex-1 p-2 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-indigo-100 text-indigo-700 font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
