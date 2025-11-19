import React, { useEffect, useState } from "react";
import AnalyticsCharts from "../components/AnalyticsCharts.jsx";

const dummyData = {
  users: [
    { name: "Alice", activeCount: 10 },
    { name: "Bob", activeCount: 5 },
  ],
  jobs: [
    { title: "React Dev", applications: 12 },
    { title: "Node Dev", applications: 8 },
  ],
  communityPie: {
    labels: ["React Devs", "AI Enthusiasts"],
    datasets: [
      {
        label: "Members",
        data: [30, 70],
        backgroundColor: ["#6366F1", "#10B981"],
      },
    ],
  },
};

const AnalyticsPage = () => {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    // TODO: fetch analytics from API
    setData(dummyData);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-slate-800">Analytics</h1>
      <AnalyticsCharts data={data} />
    </div>
  );
};

export default AnalyticsPage;
