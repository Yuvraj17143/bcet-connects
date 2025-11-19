import React, { useState } from "react";

const MentorFilters = ({ onChange }) => {
  const [selectedDept, setSelectedDept] = useState("all");

  const departments = ["All", "Computer Science", "Electrical", "Mechanical", "Civil"];

  const handleChange = (dept) => {
    setSelectedDept(dept);
    onChange?.(dept);
  };

  return (
    <div className="flex gap-2 overflow-x-auto mb-4">
      {departments.map((dept) => (
        <button
          key={dept}
          className={`px-3 py-1 text-xs rounded-full ${
            selectedDept === dept
              ? "bg-indigo-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
          onClick={() => handleChange(dept)}
        >
          {dept}
        </button>
      ))}
    </div>
  );
};

export default MentorFilters;
