import React from "react";

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3 hover:shadow-md transition">
      <h4 className="text-sm font-semibold text-slate-800 mb-1">{resource.title}</h4>
      <p className="text-xs text-slate-500 mb-2">{resource.description}</p>
      <div className="flex justify-between items-center text-xs text-slate-400">
        <span>{resource.type}</span>
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Open
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
