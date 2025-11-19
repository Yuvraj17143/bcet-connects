import React from "react";
import { useAuth } from "../../../context/AuthContext.jsx";

const ProfileHeader = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col sm:flex-row items-center gap-6">
      <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-2xl font-bold text-slate-700">
        {user.name[0]}
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-xl font-semibold text-slate-800">{user.name}</h2>
        <p className="text-sm text-slate-500">{user.role}</p>
        {user.department && (
          <p className="text-xs text-slate-400 mt-1">{user.department}</p>
        )}
        {user.bio && (
          <p className="text-sm text-slate-600 mt-2">{user.bio}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
