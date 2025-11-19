import React, { useState } from "react";

const JobFilters = ({ onChange }) => {
  const [selectedType, setSelectedType] = useState("all");

  const jobTypes = [
    { key: "all", label: "All" },
    { key: "internship", label: "Internship" },
    { key: "fulltime", label: "Full-Time" },
    { key: "parttime", label: "Part-Time" },
    { key: "remote", label: "Remote" },
  ];

  const handleTypeClick = (key) => {
    setSelectedType(key);
    onChange?.(key);
  };

  return (
    <div className="flex gap-2 overflow-x-auto mb-4">
      {jobTypes.map((type) => (
        <button
          key={type.key}
          className={`px-3 py-1 text-xs rounded-full ${
            selectedType === type.key
              ? "bg-indigo-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
          onClick={() => handleTypeClick(type.key)}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
};

export default JobFilters;
