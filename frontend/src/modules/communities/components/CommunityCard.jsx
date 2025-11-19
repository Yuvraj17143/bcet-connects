import React from "react";
import { Link } from "react-router-dom";

const CommunityCard = ({ community }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">
          {community.name[0]}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-800">{community.name}</h3>
          <p className="text-[10px] text-slate-400">{community.membersCount} members</p>
        </div>
      </div>
      <p className="text-xs text-slate-500 mb-2">{community.description}</p>
      <Link
        to={`/communities/${community.id}`}
        className="text-xs text-indigo-600 hover:underline"
      >
        Visit Community
      </Link>
    </div>
  );
};

export default CommunityCard;
