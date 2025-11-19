import React from "react";

const StatCard = ({ title, value, icon, color = "bg-indigo-50", textColor = "text-indigo-700" }) => {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl shadow-sm border ${color}`}>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full text-xl ${textColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-600">{title}</p>
        <p className="text-xl font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
