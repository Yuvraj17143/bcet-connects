import React from "react";

const PortfolioGrid = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
      <h3 className="text-sm font-semibold text-slate-700 mb-3">Portfolio</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <img
              src={proj.image || "/placeholder.png"}
              alt={proj.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-2 text-xs font-semibold text-slate-800">
              {proj.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
