import React from "react";
import { Link } from "react-router-dom";

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs">
          {mentor.name?.[0]}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-800">{mentor.name}</h3>
          <p className="text-xs text-slate-500">{mentor.expertise.join(", ")}</p>
        </div>
      </div>
      <p className="text-[10px] text-slate-400 mb-2">{mentor.department}</p>
      <div className="flex justify-between items-center">
        <Link
          to={`/mentorship/${mentor.id}`}
          className="text-xs text-indigo-600 hover:underline"
        >
          Chat / Book Session
        </Link>
        <span className="text-[10px] text-slate-400">{mentor.available ? "Available" : "Busy"}</span>
      </div>
    </div>
  );
};

export default MentorCard;
