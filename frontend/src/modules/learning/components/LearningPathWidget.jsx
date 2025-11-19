import React from "react";

// TODO: Replace with API
const dummyPaths = [
  { id: 1, name: "Frontend Development", steps: 8 },
  { id: 2, name: "Data Science with Python", steps: 12 },
  { id: 3, name: "AI & ML Basics", steps: 10 },
];

const LearningPathWidget = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3">
      <h4 className="text-sm font-semibold mb-2">Learning Paths</h4>
      <ul className="space-y-2 text-xs">
        {dummyPaths.map((path) => (
          <li
            key={path.id}
            className="p-2 border border-slate-100 rounded-lg hover:bg-indigo-50 cursor-pointer transition"
          >
            <div className="flex justify-between items-center">
              <span>{path.name}</span>
              <span className="text-slate-400 text-[10px]">{path.steps} steps</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningPathWidget;
