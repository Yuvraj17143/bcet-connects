import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3 hover:shadow-md transition">
      <h3 className="text-sm font-semibold text-slate-800">{skill.name}</h3>
      <p className="text-xs text-slate-500">{skill.level}</p>
      {skill.progress && (
        <div className="w-full bg-slate-100 rounded-full h-2 mt-2">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${skill.progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
