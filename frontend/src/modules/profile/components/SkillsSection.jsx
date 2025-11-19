import React from "react";

const SkillsSection = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
      <h3 className="text-sm font-semibold text-slate-700 mb-2">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
