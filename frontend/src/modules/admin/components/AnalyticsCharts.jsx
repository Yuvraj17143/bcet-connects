import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

const AnalyticsCharts = ({ data }) => {
  const userData = {
    labels: data.users.map(u => u.name),
    datasets: [
      {
        label: "Active Users",
        data: data.users.map(u => u.activeCount),
        backgroundColor: "rgba(79, 70, 229, 0.6)",
      },
    ],
  };

  const jobsData = {
    labels: data.jobs.map(j => j.title),
    datasets: [
      {
        label: "Applications",
        data: data.jobs.map(j => j.applications),
        backgroundColor: "rgba(16, 185, 129, 0.6)",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border p-4">
        <h3 className="text-sm font-semibold text-slate-700 mb-2">User Analytics</h3>
        <Bar data={userData} />
      </div>
      <div className="bg-white rounded-2xl shadow-sm border p-4">
        <h3 className="text-sm font-semibold text-slate-700 mb-2">Jobs Analytics</h3>
        <Line data={jobsData} />
      </div>
      <div className="bg-white rounded-2xl shadow-sm border p-4">
        <h3 className="text-sm font-semibold text-slate-700 mb-2">Community Engagement</h3>
        <Pie data={data.communityPie} />
      </div>
    </div>
  );
};

export default AnalyticsCharts;
