import React from "react";
import StatCard from "../components/StatCard.jsx";

// TODO: replace with API data
const stats = [
  { title: "Users", value: 1200, icon: "👥" },
  { title: "Jobs Posted", value: 80, icon: "💼" },
  { title: "Events", value: 25, icon: "📅" },
  { title: "Communities", value: 10, icon: "👥" },
];

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <StatCard key={idx} {...s} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
