import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-sm font-semibold text-slate-700">
          {user.name[0]}
        </div>
        <div className="flex-1">
          <Link
            to={`/profile/${user.id}`}
            className="text-sm font-semibold text-slate-800 hover:underline"
          >
            {user.name}
          </Link>
          <p className="text-xs text-slate-500">{user.role}</p>
        </div>
      </div>
      <div className="text-xs text-slate-600 mb-2">
        {user.skills?.slice(0, 3).join(", ")}
      </div>
      <div className="flex justify-between items-center text-xs text-slate-400">
        <span>{user.department || "N/A"}</span>
        <span>{user.year || ""}</span>
      </div>
    </div>
  );
};

export default UserCard;
