import React, { useState } from "react";

const FeedFilters = ({ onChange }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = [
    { key: "all", label: "All" },
    { key: "jobs", label: "Jobs" },
    { key: "events", label: "Events" },
    { key: "mentors", label: "Mentorship" },
    { key: "communities", label: "Communities" },
  ];

  const handleFilterClick = (key) => {
    setActiveFilter(key);
    onChange?.(key);
  };

  return (
    <div className="flex gap-2 mb-3 overflow-x-auto">
      {filters.map((f) => (
        <button
          key={f.key}
          className={`px-3 py-1 text-xs rounded-full ${
            activeFilter === f.key
              ? "bg-indigo-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
          onClick={() => handleFilterClick(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default FeedFilters;
