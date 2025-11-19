import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition">
      <header className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-slate-800">{job.title}</h3>
        <span className="text-[10px] text-slate-500">{job.type}</span>
      </header>
      <p className="text-xs text-slate-600 mb-2">{job.company}</p>
      <p className="text-xs text-slate-500 mb-3">{job.location}</p>
      <div className="flex justify-between items-center">
        <Link
          to={`/jobs/${job.id}`}
          className="text-xs text-indigo-600 hover:underline"
        >
          View Details
        </Link>
        <span className="text-[10px] text-slate-400">{job.postedAgo}</span>
      </div>
    </div>
  );
};

export default JobCard;
